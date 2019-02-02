import * as ActionTypes from "./ActionTypes";

const INITIAL_STATE = {
    //for products list
    loading: false,
    error: null,
    products: [],


    product: {
        name: '',
        year: 2017,
        brandId: 0,
        price: 0
    },

    brand: {
    },

    brands: []
}

export default
     function productReducer(state = INITIAL_STATE, action) {
        console.log("product reducer ", state, action);
        
        switch(action.type) {
            case ActionTypes.LOADING: {
                return Object.assign({}, state, {loading: action.payload.loading})
            }

            case ActionTypes.INIT_ERROR: {
                return Object.assign({}, state, {error: action.payload.error})
            }

            case ActionTypes.INIT_PRODUCTS: {
                return Object.assign({}, state, {products: action.payload.products})
            }


            case ActionTypes.INIT_BRANDS: {
                return {...state, brands: action.payload.brands}
            }

            case ActionTypes.INIT_BRAND: {
                return {...state, brand: action.payload.brand}
            }

            case ActionTypes.EDIT_PRODUCT: {
                return Object.assign({}, state, {product: action.payload.product})
            }
 
            default:
                return state;
        }

}