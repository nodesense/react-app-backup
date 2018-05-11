import React from "react";

import {mount} from "enzyme";
import About from "./About";

describe("About component Suite", ()=> {
    

    it("about default test", ()=> {
        let wrapper = mount(<About  />);
        expect(wrapper.find("ul").length).toBe(1);
        expect(wrapper.find("li").length).toBe(2);
    })


    it("about addMember test", ()=> {
        let wrapper = mount(<About  />);
        let component = wrapper.instance();
        component.addMember();
        wrapper.update();

        expect(wrapper.find("ul").length).toBe(1);
        expect(wrapper.find("li").length).toBe(3);
    })


    it("about empty Members test", ()=> {
        let wrapper = mount(<About  />);
        let component = wrapper.instance();
        component.empty();
        wrapper.update();
        
        expect(wrapper.find("ul").length).toBe(1);
        expect(wrapper.find("li").length).toBe(0);
    })
 
 

    it("about show/hide test", ()=> {
        let wrapper = mount(<About  />);
        let component = wrapper.instance();

        //make sure it is visible
        expect(component.state.showList).toBe(true);

        //toggle first time
        component.showHide();
        wrapper.update();

        //make sure that no ul or li element present
        expect(component.state.showList).toBe(false);
        
        expect(wrapper.find("ul").length).toBe(0);
        expect(wrapper.find("li").length).toBe(0);
    })

    it("Likes test ", () => {
        let wrapper = mount(<About  />);
        let component = wrapper.instance();

        //wrapper.find("#up").prop('onClick')();
        // or
        //wrapper.find("#up").props().onClick();

        // or
        wrapper.find("#up").simulate('click'); // the only simulate click I want


        wrapper.update();
        expect(component.state.pageLikes).toBe(1);
        expect(wrapper.find("span").text()).toBe("1");

    })
 

    it("Likes test with findWhere ", () => {
        let wrapper = mount(<About  />);
        let component = wrapper.instance();
 

        wrapper.find('.downBtn').simulate('click');

        wrapper.update();
        expect(component.state.pageLikes).toBe(-1);
        expect(wrapper.find("span").text()).toBe("-1");
        expect(wrapper.find("span").text()).toContain("-1");

    })
    

})