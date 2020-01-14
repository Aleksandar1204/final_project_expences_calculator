import React from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../../assets/css/auth/register.css'
import '../../assets/css/shared/shared.css'


class Register extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            first_name: null,
            last_name: null,
            email: null,
            date_of_birth: null,
            telephone: null,
            country: null,
            password: null,
            isAuthenticated: false
        }
    }

    saveInputValue = (event) =>{
        this.setState({[event.target.id]: event.target.value})
    }

    redirectToMain = () => {
        if (this.state.isAuthenticated) {
            return <Redirect to='/products' />
        }
    }

    registerUser = (event) => {
        if(this.state.first_name === null ||
            this.state.last_name === null ||
            this.state.email === null ||
            this.state.date_of_birth === null ||
            this.state.telephone === null ||
            this.state.country === null ||
            this.state.password === null ){
                event.preventDefault()
                alert("Please fill in the required fields:")
            }else if (this.state.first_name != null ||
                this.state.last_name != null ||
                this.state.email != null ||
                this.state.date_of_birth != null ||
                this.state.telephone != null ||
                this.state.country != null ||
                this.state.password != null ){
                    event.preventDefault()
                    axios.post('https://hidden-everglades-59214.herokuapp.com/app/v1/auth/register', {
                        first_name: this.state.first_name,
                        last_name: this.state.last_name,
                        email: this.state.email ,
                        date_of_birth: this.state.date_of_birth,
                        telephone: this.state.telephone,
                        country: this.state.country,
                        password: this.state.password,
                        _created: new Date(),
                    })
                    .then(res => {
                        console.log(res)
                        axios.post('https://hidden-everglades-59214.herokuapp.com/app/v1/auth/login', {
                            email: this.state.email,
                            password: this.state.password
                        })
                        .then(res=>{
                            localStorage.setItem('jwt', res.data.jwt);
                            localStorage.setItem('name', this.state.first_name);
                            localStorage.setItem('lastName', this.state.last_name);
                            this.setState({isAuthenticated: true});
                            
                        })
                        .catch(err => {
                            console.log(err)
                        })
                    })
                    .catch(err => {
                        console.log(err)
                    })
                }
    }


render(){
    return(
        <React.Fragment>
            {this.redirectToMain()}
            
<div id="register">
<div className="box-container">
    
    <form>

        <p className="input-container"> 
            <label className="text-field-input" htmlFor="">First Name</label>
            <input onChange={this.saveInputValue} type="text" id="first_name" className="text-field"/>
        </p>

        <p className="input-container"> 
                <label className="text-field-input" htmlFor="">Last Name</label>
                <input onChange={this.saveInputValue} type="text" id="last_name" className="text-field"/>
        </p>

        <p className="input-container"> 
            <label className="text-field-input" htmlFor="">E-mail</label>
            <input onChange={this.saveInputValue} type="email" id="email" className="text-field"/>
        </p>

        <p className="input-container"> 
            <label className="text-field-input" htmlFor="">Date of Birth</label>
            <input onChange={this.saveInputValue} type="text" id="date_of_birth" className="text-field"/>
        </p>

        <p className="input-container">
            <label className="text-field-input" htmlFor="">Telephone</label>
            <input onChange={this.saveInputValue} type="text" id="telephone" className="text-field"/>
        </p>

        <p className="input-container"> 
            <label className="text-field-input" htmlFor="">Country</label>
            <input onChange={this.saveInputValue} type="text" id="country" className="text-field"/>
        </p>

        <p className="input-container"> 
            <label className="text-field-input" htmlFor="">Password</label>
            <input onChange={this.saveInputValue} type="password" id="password" className="text-field"/>
        </p>
        

        <button onClick={this.registerUser} type="submit" className="primary-button">REGISTER</button>
   
        
    </form>
    
</div>

     <div className="aditional-info">
      <p>Or if you don't have an account.<Link to="/" > Sign in</Link></p>
     </div>

     </div>
        </React.Fragment>
    )
}

}
export default Register