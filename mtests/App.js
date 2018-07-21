import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({ amount: state.amount + 1 }));
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        Clicked <strong>{this.state.amount}</strong> times!
      </div>
    );
  }
}

export default App;