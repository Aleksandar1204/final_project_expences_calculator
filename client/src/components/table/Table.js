import React from "react";
import axios from "axios";

import './Table.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'


import { connect } from 'react-redux'
import store from '../../redux/store'

import { getProducts, tableUpdated, getTotalPrice } from "../../redux/actions/productAction";

class Table extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    componentDidMount() {
        if (this.props.products){
        axios.get('https://hidden-everglades-59214.herokuapp.com/app/v1/products/?sort=date:desc',
        {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            }
        })
        .then(res => {
            store.dispatch(getProducts(res.data));
            let totalPrice = 0;
            for (let i = 0; i < res.data.length; i++) {
                totalPrice += parseInt(res.data[i].price)
            }
            store.dispatch(getTotalPrice(totalPrice));
            
        })
        .catch(err => {
            console.log(err)
        })
    }
    }

    componentDidUpdate() {
        
        axios.get('https://hidden-everglades-59214.herokuapp.com/app/v1/products/?sort=date:desc',
        {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            
            }
        })
        
        .then(res => {
            store.dispatch(getProducts(res.data));
            store.dispatch(tableUpdated(false));
        })
        .catch(err => {
            console.log(err)
        })
    
        
    
    
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
                            <button className="btn btn-secondary" id="edit">
                            <FontAwesomeIcon icon={faEdit} />
                            </button>

                            <button className="btn btn-danger" id="delete">
                            <FontAwesomeIcon icon={faTrashAlt} />
                            </button>
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
        tableUpdated: state.productReducer.tableUpdated
    }
}

export default connect(mapStateToProps)(Table);
