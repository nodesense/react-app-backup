import React, {Component} from "react";

import {fetchProducts} from  "../service";

export default class ProductList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [],
            loading: false,
            error: false,
            errorMessage: ''
        }
    }

    componentDidMount() {
        this.setState({
            loading: true
        });

        fetchProducts()
        .then ( products => {
            console.log("products ", products);
            this.setState({
                products: products,
                loading: false
            });
        })
        .catch( error => {
            this.setState({
                error: true,
                loading: false,
                errorMessage: error.toString()
            })
        })
    }

    render() {
        if (this.state.loading) {
            return (
                <h2>Products loading ...</h2>
            );
        }

        if (this.state.error) {
            return (
                <h2> Error loading products {this.state.errorMessage} </h2>
            )
        }

        return (
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Year</th>
                    </tr>
                  
                {
                    this.state.products.map (product => (
                        <tr key={product.id}>
                           <td>{product.name}</td>
                           <td>{product.price}</td>
                           <td>{product.year}</td>
                        </tr>
                    ))
                }
            </tbody>
            </table>
        )

    }

}