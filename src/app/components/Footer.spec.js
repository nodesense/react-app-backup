import React from 'react';
import Footer from './Footer';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    // a virtual dom in json
    const tree = renderer
      .create(<Footer year={2019} company="NodeSense" ></Footer>)
      .toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toMatchSnapshot();
  });