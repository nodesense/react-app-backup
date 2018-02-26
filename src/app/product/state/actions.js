import * as ActionTypes from "./ActionTypes";
import * as service from "./service";


export function initProducts(products) {
    return {
        type: ActionTypes.INIT_PRODUCTS,
        payload: {
            products: products
        }
    }
}

export function loading (status) {
    return {
        type: ActionTypes.LOADING,
        payload: {
            loading: status
        }
    }
}


export function initError(error) {
    return {
        type: ActionTypes.INIT_ERROR,
        payload: {
            error: error
        }
    }
}


//thunk async functions

export function fetchProducts() {
    //thunk shall pass the dispatch
    return function(dispatch, getState) {

        //no error
        dispatch(initError(false));
        dispatch(loading(true));

        return service.getProducts()
        .then ( products => {
            //keep the data in redux
            dispatch(initProducts(products));
            dispatch(loading(false));
            return products; //useful for mock testing
        })
        .catch ( error => {
            dispatch(loading(false));
            dispatch(initError(error.toString()));
        })
    }
}

//Thunk, Alternative implementation using ES2017 (ES8)

export function fetchProductsAsync() {
    //thunk shall pass the dispatch
    return async function(dispatch, getState) {
        //no error
        dispatch(initError(false));
        dispatch(loading(true));

        try {
            let products = await service.getProducts();
            dispatch(initProducts(products));
            dispatch(loading(false));
        }catch (error){
            dispatch(loading(false));
            dispatch(initError(error.toString()));
        }
    }
}



//returns a function, that shall be executed by thunk
export function getProduct(id) {
    return function(dispatch) {
        console.log("Called by thunk ", id,  dispatch);

        service.getProduct(id)
        .then ( (product) => {
            dispatch( {
                type: ActionTypes.EDIT_PRODUCT,
                product: product
            })
        })
    }
}

export function updateProduct(product) {
    return {
        type: ActionTypes.EDIT_PRODUCT,
        product: product
    }
}

export function saveProduct(product) {
    return function(dispatch) {
        service.saveProduct(product)
        .then ( () => {
            alert("product saved successfully")
        })
    }
}


export function fetchProductsWithSaga() {
    return {
        type: ActionTypes.FETCH_PRODUCTS
    }
}

export function deleteProduct(id) {
    console.log("Del product ", id);
    return async function (dispatch) {
        try {
            let p = await service.deleteProduct(id)
            //dispatch(fetchProductsAsync());
        }
        catch(error) {
            console.error(error)
        }
    }
}