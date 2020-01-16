import React from 'react'

import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {} from '../../redux/actions/productAction'
// import store from '../../redux/store'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'



class Newproduct extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            description: '',
            type: '',
            date: '',
            price: ''
        }

    }


saveProduct = (event) => {
    this.setState({ [event.target.id]: event.target.value })
}

addNewProduct = (event) => {
if(this.state.name === '' || 
    this.state.description === '' ||
   this.state.type ===  '' || 
   this.state.date === '' || 
   this.state.price === '' ){
       event.preventDefault()
       alert("Please fill in the required fields:")
   }else if (this.state.name !== '' || 
   this.state.description !== '' ||
   this.state.type !== '' || 
   this.state.date !== '' || 
   this.state.price !== ''){
  axios.post('https://hidden-everglades-59214.herokuapp.com/app/v1/products/', {
            name: this.state.name,
            description: this.state.description,
            type: this.state.type,
            date: this.state.date,
            price: this.state.price,
            _created: new Date()},
  
  { headers: {"Authorization" : `Bearer ${localStorage.getItem('jwt')}`}})
  .then(res => {
      console.log(res)
  })
 .catch(err => {
     console.log(err)
 })
    
   }
   
}

render(){
    return(
        <React.Fragment>
             <div className="new-container">
        <div className="first-container">
        <div id="new-product">

<form>

        <p className="input-container"> 
            <label className="text-field-input" htmlFor="name">Product Name</label>
            <input type="text" name="name" className="text-field" id="name"  onChange={this.saveProduct}/>
        </p>

        <p className="input-container"> 
                <label className="text-field-input" htmlFor="description">Product Description</label>
                <input type="text" name="description" className="text-field" id="description"  onChange={this.saveProduct}/>
        </p>

        <p className="input-container"> 
            <label className="text-field-input" htmlFor="type">Product Type</label>
            <input type="text" name="type" className="text-field" id="type"  onChange={this.saveProduct}/>
        </p>

        <p className="input-container"> 
            <label className="text-field-input" htmlFor="date">Purchase Date</label>
            <input type="date" name="date" className="text-field" id="date"  onChange={this.saveProduct}/>
        </p>

        <p className="input-container">
            <label className="text-field-input" htmlFor="price">Product Price</label>
            <input type="text" name="price" className="text-field" id="price"  onChange={this.saveProduct}/>
        </p>

        <Link to='/products'>
        <button onClick={this.addNewProduct} class="primary-button" type="submit">CREATE PRODUCT</button>
        </Link>
        
    </form>
</div>

        </div>
    <div className="second-container">
    <div className="products-add">
    <FontAwesomeIcon icon={faPlusCircle } />
    <p>You are creating a new product</p>
</div>

</div>

</div>


        </React.Fragment>
    )
}


}

function mapStateToProps(state) {
    return {
       
    }
}

export default connect(mapStateToProps)(Newproduct)