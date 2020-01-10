import React from 'react'


import {} from '../../redux/actions/productAction'
// import store from '../../redux/store'
// import { Link } from 'react-router-dom'
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
  axios.post('https://hidden-everglades-59214.herokuapp.com/app/v1/products/', {
    name: this.state.name,
  type: this.state.type,
  description: this.state.description,
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
             <div class="new-container">
        <div class="first-container">
        <div id="new-product">

<form>

        <p class="input-container"> 
            <label class="text-field-input" for="name">Product Name</label>
            <input type="text" name="name" class="text-field"  onChange={this.saveProduct}/>
        </p>

        <p class="input-container"> 
                <label class="text-field-input" for="description">Product Description</label>
                <input type="text" name="description" class="text-field"  onChange={this.saveProduct}/>
        </p>

        <p class="input-container"> 
            <label class="text-field-input" for="type">Product Type</label>
            <input type="text" name="type" class="text-field"  onChange={this.saveProduct}/>
        </p>

        <p class="input-container"> 
            <label class="text-field-input" for="date">Purchase Date</label>
            <input type="date" name="date" class="text-field"  onChange={this.saveProduct}/>
        </p>

        <p class="input-container">
            <label class="text-field-input" for="price">Product Price</label>
            <input type="text" name="price" class="text-field"  onChange={this.saveProduct}/>
        </p>


        <button onClick={this.addNewProduct} class="primary-button" type="submit">CREATE PRODUCT</button>
   
        
    </form>
</div>

        </div>
    <div class="second-container">
    <div class="products-add">
    <i class="fas fa-plus-circle fa-3x"></i>
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