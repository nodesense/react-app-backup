import React from 'react';
import ClickableLink from "./ClickableLink";
import {shallow} from 'enzyme';

it('should handle the click event', () => {
    window.alert = jest.fn();
    const output = shallow(
      <ClickableLink title="mockTitle" url="mockUrl" />
    );
    output.simulate('click');
    expect(window.alert).toHaveBeenCalledWith('clicked!');
  });

  it('should handle state changes', () => {
    const output = shallow(
      <ClickableLink title="mockTitle" url="mockUrl" />
    );
    
    expect(output.state().clicked).toEqual(false);
    output.simulate('click');
    expect(output.state().clicked).toEqual(true);
  });