
// reference: http://redux.js.org/docs/recipes/WritingTests.html

// jest.mock("config", () => {
//     return {
//         apiEndPoint: "http://example.com"
//     }
// })


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

describe('async actions', () => {
  
  afterEach(() => {
     fetchMock.restore();
   })

  it('addItem with cart, store container mock', () => {
    fetchMock.get('http://localhost:7070/secured/api/products', [{id: 1},{id: 2}]);
    
    const expectedActions = [
      actions.addItemToCart(false)
    ]
    
    const state = {
      cart: {
        cartItems: []
      }
    }

    const store = mockStore(state)
 
    let wrapper = mount(<Provider store={store}>
                                <Cart items={[]} />
                        </Provider>);

    expect(wrapper.find("tr").length).toBe(1); // header tr present
  })



  it('addItem with cart, store container mock', () => {
    
    const expectedActions = [
      actions.addItemToCart(false)
    ]
    
    const state = {
      cart: {
        cartItems: [{id: 10, qty: 1, price: 100, name: "Test"}]
      }
    }

    const store = mockStore(state)
 
    let wrapper = mount(<Provider store={store}>
                                <Cart   />
                        </Provider>);

    expect(wrapper.find("tr").length).toBe(2);  // header + 1 item

    expect(wrapper.find("tr").at(1).text()).toContain("Test");
  })
})