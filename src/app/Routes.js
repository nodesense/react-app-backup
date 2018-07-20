
import React from "react";

import {
        BrowserRouter as Router, 
        //HashRouter as Router,
        Route, 
        Redirect,
        Switch,
        } from "react-router-dom";

        
import App from "./App";
import Home from "./components/Home";
//import About from "./components/About";
import Contact from "./components/Contact";

import NotFound from "./components/NotFound";

//import ProductList from "./components/ProductList";
import ProductList from "./product/containers/ProductList";
import Cart from "./cart/containers/Cart";
import Login from "./auth/containers/Login";

import ReactCart from "./react-cart/components/Cart";


import ProductRoutes from "./product/Routes";

//Lazy load modules, split bigger modules into smaller
import Loadable from 'react-loadable';

function Loading() {
    return (
        <div> 
            Loading ...
        </div>
    )
}

const LoadableAboutComponent = Loadable({
    loader: () => import('./components/About'),
    loading: Loading,
  });

const LoadableCartComponent = Loadable({
    loader: () => import('./cart/containers/Cart'),
    loading: Loading,
  });
  

import AuthRoute from "./auth/components/AuthRoute";

export default function Routes(props) {
    return (
        <Router>
            <App>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/cart'  component={Cart} />

                    <Route path="/react-cart" component={ReactCart} />
                    
                    {/* <Route path='/about'  component={About} /> */}

                    <Route path='/about'  component={LoadableAboutComponent} />

                    <AuthRoute path='/contact'  component={Contact} />

                    <Route path="/products" component={ProductRoutes} />
                
                    <Route path="/login" component={Login} />
                    <Route path='*'  component={NotFound} />
                </Switch>
            </App>
        </Router>
    )
}
