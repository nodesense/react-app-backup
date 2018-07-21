import React from "react";

import {shallow} from "enzyme";
import CartList from "./CartList";
import CartItem from "./CartItem";

fdescribe("React Cart component Suite", ()=> {
    it("cart default test", ()=> {
        let items = [ {id: 1, name:'Product 1', price: 100, qty: 1}]

        let wrapper = shallow(<CartList items={items} />);
        expect(wrapper.find("table").length).toBe(1);
        
        // Shall work
        expect(wrapper.find("tr").length).toBe(1);

        //expect(wrapper.find(CartItem)).to.have.length(1);
        expect(wrapper.find(CartItem).length).toBe(1);


        //shall not work, as it doesn't render deep components
       // expect(wrapper.find("tr").length).toBe(2);
 ;

        //expect(wrapper.find("strong").text()).toBe("500");

        //expect(wrapper.find("em").text()).toBe("5");
    })
});