import React, { Component } from 'react'

export default class Form extends Component {

    state ={
        firstName: "",
        lastName: "",
        userName:"",
        email:"",
        password:"",
        passwordConfirm:"",
    }

    // THis function will take [name and value] of event to set new state for application
    onInputHandlerS1 =(name, value)=>{
       // console.log(name,value); console de that name va value la gi
        this.setState(
            {
                //firstName:value // We can write like this but what if name is not firstName but password => it is inefficent
                [name]:value // condition of this is name must be correctly same with state properties.
            }
            ,()=>{
                console.log(this.state)
        })
    } 

    // WE CAN SHORTEN THIS FUNCTION
    onInputHandlerS2 = (event)=>{
        let {name,value} = event.target;
        this.setState({
            [name]:value,
        },()=>{
            console.log(this.state);
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
                                <input type="text" required name="firstName" onChange={(event)=>{
                                   // console.log(event); uncomment to see what event is
                                    this.onInputHandlerS1(event.target.name,event.target.value);
                                }}/>
                                <span className="highlight" />
                                <span className="bar" />
                                <label>First Name</label>
                            </div>
                        </div>

                        <div className='col-6'>
                            <div className="group">
                                 <input type="text" required name="lastName" onChange={this.onInputHandlerS2}/>  {/*NOTE: we dont need () after function and event param will automatically assigned*/}
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Last Name</label>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col'>
                            <div className="group">
                                <input type="text" required name="userName" onChange={this.onInputHandlerS2}/>
                                <span className="highlight" />
                                <span className="bar" />
                                <label>User Name</label>
                            </div>
                        </div>

                    </div>

                    <div className='row'>
                        <div className='col'>
                            <div className="group">
                                <input type="email" required name="email" onChange={this.onInputHandlerS2}/>
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Email</label>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-6'>
                            <div className="group">
                                <input type="password" required name="password" onChange={this.onInputHandlerS2}/>
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Password</label>
                            </div>
                        </div>

                        <div className='col-6'>
                            <div className="group">
                                <input type="password" required name="passwordConfirm" onChange={this.onInputHandlerS2}/>
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Password Confirm</label>
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
