import React from "react";
import axios from "axios";
import { connect } from 'react-redux'
import store from '../../redux/store'

import { getProducts } from "../../redux/actions/productAction";

class Table extends React.Component {
    constructor(props){
        super(props)
        this.state = {

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

    render(){
        return(
            <React.Fragment>
                
            </React.Fragment>
        )
    }

}

function mapStateToProps (state) {
    return {
        products: state.productReducer.products
    }
}

export default connect(mapStateToProps)(Table);
