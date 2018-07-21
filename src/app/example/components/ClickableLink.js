import React, { Component } from 'react';
import { string } from 'prop-types';
export default class ClickableLink extends Component {
    constructor(props) {
        super(props);
        this.state = { clicked: false };
    }
    
  handleClick = () => {
    alert('clicked!');
    this.setState({ clicked: true });
  };

  render() {
    const { title, url } = this.props;
    return <a href={url} onClick={this.handleClick}>{title}</a>;
  }
}