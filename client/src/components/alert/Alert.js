import React from 'react'
import './Alert.css'

import { connect } from 'react-redux'

import axios from 'axios'

const Alert = (props) => {
   function deleteProduct () {
        axios.delete(`https://hidden-everglades-59214.herokuapp.com/app/v1/products/`,
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                }
            })
            .then(res => {
                console.log(res)
               
                
            })
            .catch(err => {
                console.log(err)
            })
            
    }
  

    return (
        <div>
        <div class="footer">
        </div>
        <div class="alert-box">
                <p class="p-header">Delete Product</p>
                <p>You are about to delete this product. Are you sure you wish to continue? </p>
                <div class="alert-buttons">
                <button onClick={props.handleClose}  className="cancel-button" id="close">CANCEL</button>
                <button onClick={deleteProduct} className="delete-button">DELETE</button>
                </div>
            </div>
            </div>
    )
}


function mapStateToProps (state) {
    return {
        
        
    }
}



export default connect(mapStateToProps)(Alert)