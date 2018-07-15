// action creators

import * as ActionTypes from "./action-types";

export const addItem = (item) => {
    return {
        type: ActionTypes.ADD_ITEM_TO_CART,
        payload: {
            item
        }
    }
}

export const removeItem = (id) => {
    return {
        type: ActionTypes.REMOVE_ITEM_FROM_CART,
        payload: {
            id
        }
    }
}


export const updateItem = (id, qty) => {
    return {
        type: ActionTypes.UPDATE_ITEM_IN_CART,
        payload: {
            id,
            qty: parseInt(qty)
        }
    }
}

export const empty = () => {
    return {
        type: ActionTypes.EMPTY_CART
    }
}