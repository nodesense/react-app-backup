
import React from "react";

import {Route, 
        Switch,
        } from "react-router-dom";

import ProductHome 
        from "./components/ProductHome";

import ProductList 
        from "./containers/ProductList";

import ProductEdit 
        from "./containers/ProductEdit";

import ProductSearch 
        from "./components/ProductSearch";

export default function Routes(props) {
    return (
        <ProductHome>
             <Switch>
                
                <Route path="/products" 
                       exact
                       component={ProductList}>
                        
                </Route>
                
                <Route path="/products/edit/:id" 
                       component={ProductEdit}>
                
                </Route>

                <Route path="/products/create" 
                       component={ProductEdit}>
                
                </Route>
                
                <Route path="/products/search" 
                       component={ProductSearch}>
                
                </Route>

             </Switch>
        </ProductHome>
    )
}
