import React from 'react'


import {} from '../../redux/actions/productAction'
import store from '../../redux/store'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'


class Newproduct extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name:'',
            type:'',
            description:'',
            date:'',
            price:''
        }

    }
}

saveProduct = (event) => {
    this.setState({ [event.target.id]: event.target.value })
}

addNewProduct = (event) => {
if(this.state.name === "" || 
   this.state.type === "" || 
   this.state.description === "" ||
   this.state.date === "" || 
   this.state.price === "" ){
       event.preventDefault()
       alert("Please fill in the required fields:")

   }else if (this.state.name !== "" || 
   this.state.type !== "" || 
   this.state.description !== "" ||
   this.state.date !== "" || 
   this.state.price !== ""){

    const newProduct = {
        name: this.state.name,
        type: this.state.type,
        description: this.state.description,
        date: this.state.date,
        price: this.state.price,
        _created: new Date()
   }
  axios.post('https://hidden-everglades-59214.herokuapp.com/api/v1/products/', {newProduct},
  
  { headers: {"Authorization" : `Bearer ${localStorage.getItem('jwt')}`}})
  .then(res => {
      console.log(res)
  })
 .catch(err => {
     console.log(err)
 })
    
   }
}



function mapStateToProps(state) {
    return {
       
    }
}

export default connect(mapStateToProps)(Newproduct)