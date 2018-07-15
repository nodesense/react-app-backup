// Jasmine library, in built in Jest

import cartReducer from "./cartReducer";
import * as ActionTypes from "./action-types";
import * as actions from "./actions";

describe ("cart Reducer test suite", () => {

    it("should add item to end of the array", () => {
        
        let prevState = [ {id: 1}];
        let action = actions.addItem({id: 2});

        expect(cartReducer(prevState, action))
                    .toEqual([
                        {id: 1},
                        {id: 2}
                    ]);



    })


    it("second test ", () => {
        
    })

})