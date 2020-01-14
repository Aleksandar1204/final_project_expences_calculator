import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            isAuthenticated: false
        }
    }

    saveInputValue = (event) => {
        this.setState({[event.target.id]: event.target.value})
    }

    redirectToMain = () => {
        if (this.state.isAuthenticated) {
            return <Redirect to='/products' />
        }
    }

        logIn = (event) => {
            if(this.state.email === '' || this.state.password === ''){
                event.preventDefault()
                alert("Please fill in the required fields:")
            }else if(this.state.email !== '' || this.state.password !== ''){
                event.preventDefault()
                axios.post('https://hidden-everglades-59214.herokuapp.com/app/v1/auth/login', {
                    email: this.state.email,
                    password: this.state.password
                })
                .then(res => {
                    localStorage.setItem('jwt', res.data.jwt);
                    localStorage.setItem('first_name', res.data.first_name);
                    localStorage.setItem('last_name', res.data.last_name);
                    this.setState({ isAuthenticated: true })
                })
                .catch(err =>{
                    console.log(err)
                })
            }
        }

        render(){
            return(
                <React.Fragment>
                    {this.redirectToMain()}

                    <div className="login">

        <div className="box-container">
            
            <form>

                <p className="input-container"> 
                    <label class="text-field-input" for="email">E-mail</label>
                    <input onChange={this.saveInputValue} type="email" name="email" id="email" class="text-field"/>
                </p>

                <p className="input-container"> 
                        <label className="text-field-input" for="password">Password</label>
                        <input onChange={this.saveInputValue} type="password" name="password" id="password" class="text-field"/>
                </p>

                

                <button className="primary-button" type="submit" onClick={this.logIn}>SIGN IN</button>
           
                
            </form>
            
        </div>

             <div className="aditional-info">
              <p>Or if you don't have an account.<Link to="/register" >Register</Link></p>
             </div>

    </div>
                </React.Fragment>
            )
        }

}

export default Login