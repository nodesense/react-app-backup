import * as ActionTypes from "./action-types";

const INITIAL_STATE = []

export default function cartReducer(state = INITIAL_STATE, action) {
    console.log("cartReducer ", state, action);

    switch (action.type) {
        case ActionTypes.ADD_ITEM_TO_CART: 
            return [...state, action.payload.item];

        case ActionTypes.REMOVE_ITEM_FROM_CART: 
            return state.filter ( item => item.id != action.payload.id);

        case ActionTypes.UPDATE_ITEM_IN_CART: 
            return state.map ( item => {
                if (item.id != action.payload.id)
                    return item;

                return {...item, qty: action.payload.qty};
            })
        case ActionTypes.EMPTY_CART: 
            return [];

        default:
            return state;
    }
}