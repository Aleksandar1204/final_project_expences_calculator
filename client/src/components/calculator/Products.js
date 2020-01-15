import React from 'react'
import axios from 'axios'

import { getProducts } from '../../redux/actions/productAction'
import store from '../../redux/store'
import { connect } from 'react-redux'
import Table from '../table/Table'



class Products extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filterOption: null,
            didUpdate:false
        }
    }

    componentDidUpdate() {
        if(this.state.didUpdate === true){
        if(this.state.filterOption !== null) {
            axios.get(`https://hidden-everglades-59214.herokuapp.com/app/v1/products/?sort=${this.state.filterOption}`,
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                    }
                }
            )
                .then(res => {
                    store.dispatch(getProducts(res.data));
                    
                })
                .catch(err => {
                    console.log(err);
                })
                
        }
        this.setState({didUpdate: false})
    }
    }
    filterHandler = (event) => {
        this.setState({ filterOption: event.target.value })

    }

    render() {
        return (
            <React.Fragment>
                
                <div className="main-div">
                    <h3>Products</h3>
                    <label htmlFor="sort">Filter by:
                <select name="filterOption" id="sort" onChange={this.filterHandler}>
                            <option value="date:desc">Last Purchase</option>
                            <option value="date:asc">First Purchase</option>
                            <option value="price:desc">Highest Price</option>
                            <option value="price:asc">Lowest Price</option>
                        </select>
                    </label>
                </div>
                <Table/>
                
                
            </React.Fragment>
        )
    }
}

function mapStateToProps (state) {
    return {
        products: state.productReducer.products,
        
    }
}

export default connect(mapStateToProps)(Products)