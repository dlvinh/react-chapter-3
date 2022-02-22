import React, { Component } from 'react'
import Swal from 'sweetalert2'

// CommonJS



export default class Form extends Component {
    state = {
        values: {
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
            password: "",
            passwordConfirm: "",
        },
        errors: {
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
            password: "",
            passwordConfirm: "",
        },
    };
    Swal = require('sweetalert2')

    // THis function will take [name and value] of event to set new state for application
    onInputHandlerS1 = (name, value) => {
        // console.log(name,value); console de that name va value la gi
        this.setState(
            {
                //firstName:value // We can write like this but what if name is not firstName but password => it is inefficent
                [name]: value // condition of this is name must be correctly same with state properties.
            }
            , () => {
                console.log(this.state)
            })
    }

    // WE CAN SHORTEN THIS FUNCTION
    onInputHandlerS2 = (event) => {
        let {name, value} = event.target;
        let newErrors = {...this.state.errors};
        let newValues = {...this.state.values};

        // Empty Validation
        if (value.trim() === ""){
            newErrors[name] = name + " is required";
        }else{
            newErrors[name] = "";
        }

        // Email Validation
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (name === "email"){
            if (!re.test(value)){
                newErrors[name] = name + " is in wrong format";
            }else{
                newErrors[name] = "";
            }
        }

        //Validate Password
        const passRe  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if (name === "password"){
            if (!passRe.test(value)){
                newErrors[name] = name + " is in wrong format";
            }else{
                newErrors[name] = "";
            }
        }

        if (name === "passwordConfirm"){
            if (this.state.values.password !== value){
                newErrors[name] = name + " is in valid";
            }else{
                newErrors[name] = "";
            }
        }
        
        this.setState({...this.state,
            values: {...newValues,[name]:value},
            errors: {...newErrors}
        }, () => {
          console.log("state",this.state);
        })
    }

    /*
        VALIDATE SUBMIT
        we can use properties "required" in react if we want
        for external validation we can but "onSubmit" properties on <form> so that they can handle the submission
            */
    onSubmitHandler = (event)=>{
        event.preventDefault();
        let validErrors = true;
        let validValue = true;
        let valid = true;
        for (const [key, value] of Object.entries(this.state.values)) {
            if (value === ""){
                valid = false;
            }
          }
        for (const [key, value] of Object.entries(this.state.errors)) {
            console.log([key,value])
            if (value !== ""){
            
                valid = false;
                
            }
          }
          
          //console.log("validErrors",validErrors,"validValue",validValue)
         // let valid = validErrors && validValue;
          console.log("newSubmitHandler",valid);
        if (valid === false){
            Swal.fire({
                title: 'Invalid!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Next'
              })
        }else{
            Swal.fire({
                title: 'SUCCESS!',
                text: 'GOOD TO SEE YOU',
                icon: 'success',
                confirmButtonText: 'Next'
              })
            
        }
    }
    render() {
        return (
            <div className="container">
                <h2>User Profile</h2>
                <form onSubmit={this.onSubmitHandler}>
                    <div className='row'>
                        <div className='col-6'>
                            <div className="group">
                                <input type="text" required name="firstName" onChange={this.onInputHandlerS2} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>First Name</label>
                                <span className='hightlight text text-danger text-left'>{this.state.errors.firstName}</span>
                            </div>
                        </div>

                        <div className='col-6'>
                            <div className="group">
                                <input type="text" required name="lastName" onChange={this.onInputHandlerS2} />  {/*NOTE: we dont need () after function and event param will automatically assigned*/}
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Last Name</label>
                                <span className='hightlight text text-danger text-left'>{this.state.errors.lastName}</span>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col'>
                            <div className="group">
                                <input type="text" required name="userName" onChange={this.onInputHandlerS2} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>User Name</label>
                                <span className='hightlight text text-danger text-left'>{this.state.errors.userName}</span>
                            </div>
                        </div>

                    </div>

                    <div className='row'>
                        <div className='col'>
                            <div className="group">
                                <input type="text" required name="email" onChange={this.onInputHandlerS2} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Email</label>
                                <span className='hightlight text text-danger text-left'>{this.state.errors.email}</span>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-6'>
                            <div className="group">
                                <input type="password" required name="password" onChange={this.onInputHandlerS2} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Password</label>
                                <span className='hightlight text text-danger text-left'>{this.state.errors.password}</span>
                            </div>
                        </div>

                        <div className='col-6'>
                            <div className="group">
                                <input type="password" required name="passwordConfirm" onChange={this.onInputHandlerS2} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Password Confirm</label>
                                <span className='hightlight text text-danger text-left'>{this.state.errors.passwordConfirm}</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="btn text-white bg-dark w-100" >Submit</button>
                    </div>
                </form>

            </div>

        )
    }
}
