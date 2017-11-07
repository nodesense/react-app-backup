import * as ActionTypes from "./ActionTypes";

//action creators are plain function, they create 
//plain objects

export const addItemToCart = (product) => {
    return {
        type: ActionTypes.ADD_ITEM_TO_CART,
        payload: {
            item: {
                id :  product.id,
                name: product.name,
                qty: product.qty || 1,
                price: product.price
            }
        }
    }
}


export const removeItemFromCart = (id) => {
       return {
        type: ActionTypes.REMOVE_ITEM_FROM_CART,
        payload: {
            id: id
        }
    }
}


export const updateItemInCart = (id, qty) => {
    return {
        type: ActionTypes.UPDATE_ITEM_IN_CART,
        payload: {
            id: id,
            qty: qty
        }
    }
}


export const  emptyCart = () => {
    return {
        type: ActionTypes.EMPTY_CART
    }
}
 

// export function addItemToCart(item) {
//     return {
//         type: ActionTypes.ADD_ITEM_TO_CART,
//         payload: {
//             item: item
//         }
//     }
// }
 
// export function removeItemFromCart(id) {
//     return {
//         type: ActionTypes.REMOVE_ITEM_FROM_CART,
//         payload: {
//             id: id
//         }
//     }
// }
 
// export function updateItemInCart(id, qty) {
//     return {
//         type: ActionTypes.UPDATE_ITEM_IN_CART,
//         payload: {
//             id: id,
//             qty: qty
//         }
//     }
// }
 


// export function emptyCart() {
//     return {
//         type: ActionTypes.EMPTY_CART
//     }
// }
 