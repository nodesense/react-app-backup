import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({ count: state.count + 1 }));
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        Clicked <strong>{this.state.count}</strong> times!
      </div>
    );
  }
}

export default Counter;