import React, {Component} from "react";
import PropTypes from "prop-types";

import {Link} from "react-router-dom";

export default class ProductList extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // Using Thunk
        // this.props.actions.fetchProductsAsync();

        // Using Saga
        this.props.actions.fetchProductsWithSaga();
    }
 
    render() {
        if (this.props.loading) {
            return (
                <h2>Products loading ...</h2>
            );
        }

        if (this.props.error) {
            return (
                <h2> Error loading products {this.props.errorMessage} </h2>
            )
        }

        return (
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Year</th>
                        <th>+Cart</th>
                        <th>Delete</th>
                    </tr>
                  
                {
                    this.props.products.map (product => (
                        <tr key={product.id}>
                           <td>
                           
                           <Link to={`/products/edit/${product.id}`}
                              >
                              {product.name}
                            </Link>
                           
                           </td>
                           <td>{product.price}</td>
                           <td>{product.year}</td>
                           <td>
                               <button onClick={() => this.props.addItemToCart(product)}>
                                +Cart
                               </button>
                            </td>

                            <td>
                               <button onClick={() => this.props.actions.deleteProduct(product.id)}>
                                X
                               </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
            </table>
        )

    }

}


ProductList.defaultProps = {
    products: [],
    loading: false,
    error: false,
    errorMessage: ''
}
