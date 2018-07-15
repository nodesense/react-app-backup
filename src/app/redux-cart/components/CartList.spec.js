import CartList from "./CartList";
import React from "react";
import {shallow, mount} from 'enzyme';

import store from "../../store";
import {Provider} from "react-redux";

describe ("CartList spec", () => {
    it("cart list test", () => {
        let items = [ {id: 1, name: 'P1', price: 100, qty: 1},
                        {id: 2, name: 'P2', price: 100, qty: 1}
        ];

        let wrapper = mount(<Provider store={store}>
                                <CartList items={items} />
                            </Provider>);

        expect(wrapper.find("tr").length).toBe(3);

    })
})