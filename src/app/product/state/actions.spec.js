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

    afterEach(() => {
       // nock.cleanAll()
        fetchMock.restore();
      })
       
    it("should get products", async () => {
 
        fetchMock.get('http://localhost:7070/secured/api/products', [{id: 1},{id: 2}]);

        
        let actionFn = fetchProducts();

        //mock for dispatch, to emulate thunk calling behaviour
        let dispatch = jest.fn();
         

        let products = await actionFn(dispatch);
 
    
        
        console.log("cheecking mock called");
        expect(dispatch).toHaveBeenCalled();

        expect(dispatch).toHaveBeenCalledTimes(4);
        
        expect(dispatch.mock.calls[0]).toEqual([actions.initError(false)]);
        expect(dispatch.mock.calls[1]).toEqual([actions.loading(true)]);

        expect(dispatch.mock.calls[2]).toEqual([actions.initProducts(
                [{id: 1}, {id: 2}])
        ]);


        expect(dispatch.mock.calls[3]).toEqual([actions.loading(false)]);
        
              
    })
})