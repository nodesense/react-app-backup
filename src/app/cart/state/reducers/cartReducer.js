import * as ActionTypes from "../ActionTypes";

const INITIAL_STATE = [];
 
export default function cartReducer(state = INITIAL_STATE,
                                   action) {

    console.log("cart Reducer called", state, action);

    switch(action.type) {
        case ActionTypes.ADD_ITEM_TO_CART: {
            //check if item exists
            //if item doesn't exist add to list.
            let item = state.find( item => item.id == action.payload.item.id);
            if (!item) { //item not found, add here
                return [...state, action.payload.item]
            }

            //if item already exists, increment quantity

            return state.map ( item => {
                if (item.id != action.payload.item.id) 
                    return item;

                return Object.assign({}, item, {qty: item.qty + action.payload.item.qty});
            })
        }

        case ActionTypes.REMOVE_ITEM_FROM_CART: 
            return state.filter(item => item.id != action.payload.id)

        case ActionTypes.UPDATE_ITEM_IN_CART: {
            return state.map( item => {
                if (item.id != action.payload.id) 
                    return item;
                
                return Object.assign({}, item, {qty: action.payload.qty});
            })
        }

        case ActionTypes.EMPTY_CART: 
            return []

        default: 
            return state;
    }

}