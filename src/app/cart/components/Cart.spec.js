import {mount} from "enzyme";
import React from "react";
import Cart from "./Cart";

describe("Cart Test Suite", ()=> {
    

    it("test cart empty list", ()=> {
        let wrapper = mount(<Cart items={[]} />);

        expect(wrapper.find("tr").length).toBe(1);
    })

    it("test cart with 1 item", ()=> {
        let wrapper = mount(<Cart items={[{id: 1, name:"phone 1", price: 100, qty: 1}]} />);

        expect(wrapper.find("tr").length).toBe(2);
    })

    it("test cart with remove item", ()=> {
        //mocks
        let actions = {removeItemFromCart: jest.fn()}
          
        let wrapper = mount(<Cart items={[{id: 10, name:"phone 1", price: 100, qty: 1}]} 
                                  actions={actions} />);

        wrapper.instance().removeItem(10);

        expect(actions.removeItemFromCart).toHaveBeenCalled();
        expect(actions.removeItemFromCart).toHaveBeenCalledTimes(1);
        expect(actions.removeItemFromCart).toHaveBeenCalledWith(10);
    })

    

})