
// reference: http://redux.js.org/docs/recipes/WritingTests.html

jest.mock("config", () => {
    return {
        apiEndPoint: "http://example.com"
    }
})


import {mount} from "enzyme";
import React from "react";
import Cart from "./Cart";


import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../state/actions'
import {Provider} from 'react-redux';
import cartReducer from "../state/reducers/cartReducer";

 
import fetchMock from 'fetch-mock';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

xdescribe('async actions', () => {
  
  afterEach(() => {
     fetchMock.restore();
   })

  it('addItem with cart, store container mock', () => {
    
    fetchMock.get('http://example.com/api/products', [{id: 1},{id: 2}]);
    
    const expectedActions = [
      actions.addItemToCart(false)
    ]
    
    const store = mockStore({ cartItems: [] })
 
    let wrapper = mount(<Provider store={store}>
                                <Cart items={[]} />
                        </Provider>);

    expect(wrapper.find("tr").length).toBe(2);
 


  })
})