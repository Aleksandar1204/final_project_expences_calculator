import React from "react";
import axios from "axios";
import { connect } from 'react-redux'
import store from '../../redux/store'

import { getProducts, tableUpdated } from "../../redux/actions/productAction";

class Table extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            product: null
        }
    }

    componentDidMount() {
        
        axios.get('https://hidden-everglades-59214.herokuapp.com/app/v1/products/',
        {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            }
        })
        .then(res => {
            store.dispatch(getProducts(res.data))
        })
        .catch(err => {
            console.log(err)
        })
    
    }

    componentDidUpdate() {
        if (this.props.tableUpdated){
        axios.get('https://hidden-everglades-59214.herokuapp.com/app/v1/products/',
        {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            
            }
        })
        
        .then(res => {
            store.dispatch(getProducts(res.data))
            store.dispatch(tableUpdated(false));
        })
        .catch(err => {
            console.log(err)
        })
    }
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
                        <td>{product.date}</td>
                        <td>{product.price}</td>
                        <td>
                            <button className="btn btn-secondary" id="edit">
                              Edit
                            </button>

                            <button className="btn btn-danger" id="delete">
                              Delete
                            </button>
                        </td>
                </tr>
            )
        })
        }
    
        return(
            <React.Fragment>
        <table className="table">
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
