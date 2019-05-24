import authReducer from './reducer';
import * as ActionTypes from './ActionTypes';

describe("auth Reducer test suite ", () => {
    it("should have auth reducer default state ", () => {
        // toEqual deep comapre
        expect(authReducer(undefined, {type: 'NOT THERE'}))
                .toEqual({
                    authenticated: false
                })
    })

    it("should set the login true  ", () => {
        // toEqual deep comapre
        const action = {type: ActionTypes.LOGGED_IN};
        expect(authReducer({
                                authenticated: false
                            }, action))
                .toEqual({
                    authenticated: true
                })
    })
})