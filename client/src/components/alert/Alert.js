import React from 'react'
import Popup from "reactjs-popup";
import './Alert.css'
import { deleteProduct } from "../../redux/actions/productAction";
import { connect } from 'react-redux'
import store from '../../redux/store'
import axios from 'axios'

class Alert extends React.Component  {
        constructor(props){
            super(props)
            this.state = {
                isOpen:false
               
            }
        }
    deleteProduct = (_id) => {
        axios.delete(`https://hidden-everglades-59214.herokuapp.com/app/v1/products/${_id}`,
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                }
            })
            .then(res => {
                console.log(res)
                store.dispatch(deleteProduct(_id))
                
            })
            .catch(err => {
                console.log(err)
            })
            
    }

    handleClose = () => {
        this.setState({ isOpen: false });
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
                <Popup content = {<button onClick={this.handleClose}  className="cancel-button" id="close">CANCEL</button>}/>
                <button onClick={this.deleteProduct} className="delete-button">DELETE</button>
                </div>
            </div>
            </div>
    )
}

}
function mapStateToProps (state) {
    return {
        
        
    }
}



export default connect(mapStateToProps)(Alert)