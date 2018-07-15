import React from 'react';
import { shallow, mount } from 'enzyme';
import Counter from './Counter';

describe ("Counter specs ", () => {

    // smoke test - test if it render
    it('it should render', () => {
        shallow(<Counter />);
    });
    
    // snapshot test - test the final HTML
    it('it should render the expected HTML', () => {
        expect(
        mount(<Counter />).html()
        ).toMatchSnapshot();
    });
    
    // unit test - test functionality
    it('it should update the state and change the DOM after each click', () => {
        const wrapper = shallow(<Counter />);
    
        expect(
        wrapper.find('strong').text()
        ).toBe('0');
    
        wrapper.find('div').simulate('click');
    
        expect(
        wrapper.find('strong').text()
        ).toBe('1');
    });
})