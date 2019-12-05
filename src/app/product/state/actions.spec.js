//mock restful api
import fetchMock from 'fetch-mock';

//jest.useFakeTimers();

import * as ActionTypes from "./ActionTypes";
import * as actions from "./actions";

// jest.mock("config", () => {
//     return {
//         apiEndPoint: "http://example.com"
//     }
// })

//import nock from 'nock'
 
import {
    getProduct,
    fetchProducts,
    saveProduct
} from "./actions";

describe("testing get products", () => {

    // called after every test case, clean up, restore to origin
    afterEach(() => {
       // nock.cleanAll()
        fetchMock.restore();
      })
       
    it("should get products", async () => {
 
        // actual url
        // expected mock response
        fetchMock.get('http://localhost:7070/secured/api/products', //mock request
                      [{id: 1},{id: 2}]); // mock response

        
        // call the actual function, which makes api call
        let actionFn = fetchProducts();

        //mock for dispatch, to emulate thunk calling behaviour
        let dispatch = jest.fn();
         
        // calling thunk method with dispatch mock function
        let products = await actionFn(dispatch);
     
        console.log("cheecking mock called");
        expect(dispatch).toHaveBeenCalled();

        expect(dispatch).toHaveBeenCalledTimes(4);
        
        // Check output of the first dispatch call
        expect(dispatch.mock.calls[0]).toEqual([actions.initError(false)]);

        // Check output of the second dispatch call
        expect(dispatch.mock.calls[1]).toEqual([actions.loading(true)]);

        expect(dispatch.mock.calls[2]).toEqual([actions.initProducts(
                [{id: 1}, {id: 2}])
        ]);

        expect(dispatch.mock.calls[3]).toEqual([actions.loading(false)]);
         
    })
})