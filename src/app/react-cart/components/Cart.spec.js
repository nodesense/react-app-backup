import React from "react";

import {mount} from "enzyme";
import Cart from "./Cart";

describe("React Cart component Suite", ()=> {
    

    it("cart default test", ()=> {
        let wrapper = mount(<Cart  />);
        expect(wrapper.find("table").length).toBe(1);
        expect(wrapper.find("tr").length).toBe(2);

        expect(wrapper.find("strong").text()).toBe("500");

        expect(wrapper.find("em").text()).toBe("5");
    })


    it("cart addItem test", ()=> {
        let wrapper = mount(<Cart  />);
        let component = wrapper.instance();
        component.addItem(2, 200);
        wrapper.update();

        expect(wrapper.find("tr").length).toBe(3);

        expect(wrapper.find("strong").text()).toBe("700");

        expect(wrapper.find("em").text()).toBe("6");
    })


    it("cart emptyCart test", ()=> {
        let wrapper = mount(<Cart  />);
        let component = wrapper.instance();
        component.empty();
        wrapper.update();

        expect(wrapper.find("table").length).toBe(0);

        expect(wrapper.find("tr").length).toBe(0);

        expect(wrapper.find("strong").text()).toBe("0");

        expect(wrapper.find("em").text()).toBe("0");
    })

  
 
    

})