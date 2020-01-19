import React from "react";
import Popup from "reactjs-popup";

import './Table.css'
import store from '../../redux/store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { editProduct, editProductClicked } from "../../redux/actions/productAction";

import './Alert.css'

class Table extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            editProductClicked: false,
            isOpen:false
        }
    }

    editProduct = (product) => {
        const clicked = !this.state.editProductClicked
        store.dispatch(editProduct(product));
        store.dispatch(editProductClicked(clicked));

    }

    handleClose = () => {
        this.setState({ isOpen: false });
      }

      handleOpen = () => {
        this.setState({ isOpen: true });
      }
    
    
    render(){
        let productsTable = null;
        if(this.props.products){
            productsTable=this.props.products.map(product => {   
            return(
                <tr key = {product._id}>
                        <td>{product.name}</td>
                        <td>{product.type}</td>
                        <td>{product.description}</td>
                        <td>{product.date.toString().slice(0, 10)}</td>
                        <td>{product.price}</td>
                        <td>
                            <Link to="/edit-product">
                            <button className="btn-secondary" title="Edit this product" id="edit" onClick={() => this.editProduct(product)}>
                            <FontAwesomeIcon icon={faEdit} />
                            </button>
                            </Link> 
                            <Popup trigger={<button  className="btn-danger" title="Delete this product" id="delete" >
                            <FontAwesomeIcon icon={faTrashAlt}  />
                            </button>} position="center"  on='click' open={this.state.isOpen} onOpen={this.handleOpen}>
                                                   
                                                   <div class="footer">
                                                   
                           <div class="alert-box">
                                   <p class="p-header">Delete Product</p>
                                   <p>You are about to delete this product. Are you sure you wish to continue? </p>
                                   <div class="alert-buttons">
                                   <button onClick={this.handleClose}className="cancel-button" id="close">CANCEL</button>
                                   <button onClick={this.deleteProduct} className="delete-button">DELETE</button>
                                   </div>
                               </div>
                         </div>
                         </Popup>
                        </td>
                </tr>
            )
        })
    }
    
        return(
            <React.Fragment>
                <div className="table-container">
        <table>
          <thead>
            <tr>
                <th>Product Name</th>
                <th>Product Type</th>
                <th>Product Description</th>
                <th>Purchase Date</th>
                <th>Product Price</th>
            </tr>
          </thead>
                <tbody>
                {productsTable}
                </tbody>
        </table>
        </div>
            </React.Fragment>
        )
    }

}

function mapStateToProps (state) {
    return {
        products: state.productReducer.products,
        editProductClicked: state.productReducer.editProductClicked,
        
       
    }
}

export default connect(mapStateToProps)(Table);
