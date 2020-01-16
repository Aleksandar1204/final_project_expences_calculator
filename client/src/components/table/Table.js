import React from "react";


import './Table.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'


import { connect } from 'react-redux'




class Table extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            
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
                        <td>{product.date.toString().slice(0, 10)}</td>
                        <td>{product.price}</td>
                        <td>
                            <button className="btn-secondary" title="Edit product" id="edit">
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
       
    }
}

export default connect(mapStateToProps)(Table);
