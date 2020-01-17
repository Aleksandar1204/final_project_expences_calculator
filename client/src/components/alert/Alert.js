import React from 'react'
import './Alert.css'
import { deleteProduct } from "../../redux/actions/productAction";
import { connect } from 'react-redux'
import store from '../../redux/store'
import axios from 'axios'

class Alert extends React.Component  {
        constructor(props){
            super(props)
            this.state = {
                productDeleted:false,
                showModal:null
            }
        }
    deleteProduct = (product, productID) => {
        axios.delete(`https://hidden-everglades-59214.herokuapp.com/app/v1/products/${productID}`,
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                }
            })
            .then(res => {
                console.log(res)
                store.dispatch(deleteProduct(product))
                
            })
            .catch(err => {
                console.log(err)
            })
            this.setState({productDeleted: true})
    }
  
render(){
    return (
        <div>
        <div class="footer">
        </div>
        <div class="alert-box">
                <p class="p-header">Delete Product</p>
                <p>You are about to delete this product. Are you sure you wish to continue? </p>
                <div class="alert-buttons">
                <button onClick={() => this.setState({ showModal: null })}  className="cancel-button" id="close">CANCEL</button>
                <button onClick={this.deleteProduct} className="delete-button">DELETE</button>
                </div>
            </div>
            </div>
    )
}

}
function mapStateToProps (state) {
    return {
        deleteProduct: state.productReducer.product
        
    }
}



export default connect(mapStateToProps)(Alert)