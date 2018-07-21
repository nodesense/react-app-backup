import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

var expect = require('chai').expect

// smoke test - test if it render
it('it should render', () => {
  shallow(<App />);
});

// // snapshot test - test the final HTML
// it('it should render the expected HTML', () => {
//   expect(
//     mount(<App />).html()
//   ).toMatchSnapshot();
// });

// unit test - test functionality
it('it should update the state and change the DOM after each click', () => {
  const wrapper = shallow(<App />);

  expect(
    wrapper.find('strong').text()
  ).to.eq('0');

  wrapper.find('div').simulate('click');

  expect(
    wrapper.find('strong').text()
  ).to.eq('1');
});