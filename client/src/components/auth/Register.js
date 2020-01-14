import React from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'


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
            

<div class="box-container" id="register">
    
    <form>

        <p class="input-container"> 
            <label class="text-field-input" for="">First Name</label>
            <input onChange={this.saveInputValue} type="text" class="text-field"/>
        </p>

        <p class="input-container"> 
                <label class="text-field-input" for="">Last Name</label>
                <input onChange={this.saveInputValue} type="text" class="text-field"/>
        </p>

        <p class="input-container"> 
            <label class="text-field-input" for="">E-mail</label>
            <input onChange={this.saveInputValue} type="email" class="text-field"/>
        </p>

        <p class="input-container"> 
            <label class="text-field-input" for="">Date of Birth</label>
            <input onChange={this.saveInputValue} type="text" class="text-field"/>
        </p>

        <p class="input-container">
            <label class="text-field-input" for="">Telephone</label>
            <input onChange={this.saveInputValue} type="text" class="text-field"/>
        </p>

        <p class="input-container"> 
            <label class="text-field-input" for="">Country</label>
            <input onChange={this.saveInputValue} type="text" class="text-field"/>
        </p>

        <p class="input-container"> 
            <label class="text-field-input" for="">Password</label>
            <input onChange={this.saveInputValue} type="password" class="text-field"/>
        </p>
        

        <button onClick={this.registerUser} type="submit" class="primary-button">REGISTER</button>
   
        
    </form>
    
</div>

     <div class="aditional-info">
      <p>Or if you don't have an account.<Link to="/" className="additional-info"> Sign in</Link></p>
     </div>


        </React.Fragment>
    )
}

}
export default Register