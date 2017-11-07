import cartReducer from "./cartReducer";
import * as ActionTypes from "../ActionTypes";


describe ("Cart Reducer Default Tests", () => {
    
    it ("should be empty list", () => {
        expect(cartReducer (undefined, {})).toEqual([])
    })

    it ("should be same state", () => {
        let state = [];
        //reference check
        expect(cartReducer(state, {type:'__UNKNOWN'})).toBe(state)
    })

})