// reference: http://redux.js.org/docs/recipes/WritingTests.html

// jest.mock("config", () => {
//     return {
//         apiEndPoint: "http://example.com"
//     }
// })

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './actions'
import * as ActionTypes from './ActionTypes'

import fetchMock from 'fetch-mock';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  
  afterEach(() => {
     fetchMock.restore();
   })

  it('getproducts with store mock', () => {
    
    fetchMock.get('http://localhost:7070/secured/api/products', [{id: 1},{id: 2}]);
    
    const expectedActions = [
      actions.initError(false),
      actions.loading(true),
      actions.initProducts([{id: 1},{id: 2}]),
      actions.loading(false)
    ]
    
    const store = mockStore({ products: [] })

    return store.dispatch(actions.fetchProducts()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})