import React, { Component } from 'react'

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
        }
    }

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
        if (name === "password" || name === "passwordConfirm"){
            if (!passRe.test(value)){
                newErrors[name] = name + " is in wrong format";
            }else{
                newErrors[name] = "";
            }
        }
        
        


        this.setState({
            values: {...newValues,[name]:value},
            errors: {...newErrors}
        }, () => {
          console.log("state",this.state);
        })
    }
    render() {
        return (
            <div className="container">
                <h2>User Profile</h2>
                <form>
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
                        <button type="submit" className="btn text-white bg-dark w-100">Submit</button>
                    </div>


                </form>

            </div>

        )
    }
}
