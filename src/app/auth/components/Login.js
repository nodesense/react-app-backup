import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
 
export default class Login extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
        username: '',
        password: ''
    };

    //Old ES5 style bound, method
    //given for reference, with es6, we could use => in jsx
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e, history) {
    e.preventDefault();
    const { username, password } = this.state;
    const { login } = this.props.actions;
    //FIXME: add the redirct after user logged in
    this.props.actions.login(username, password, this.props.history);
  }

  onChange(e) {
    const { value, name } = e.target;
    this.setState({ [name] : value });
  }

  render() {
    const { username, password  } = this.state;
    

    return (
      <div>
        <h3>LOGIN</h3>
        <form onSubmit={(e)=>this.onSubmit(e)}>
           <span>User Name </span>
            <input
              name="username"
              value={username}
              
              type="text"
              onChange={(e) => this.onChange(e)}
            />

            <span>password </span>
            <input
              name="password"
              value={password}
              label="Password"
              type="password"
              onChange={(e) => this.onChange(e)}
            />
            
            <button type="submit">Login</button>
        </form>

         <ul>
            <li> username: admin, password: admin </li>
            <li> username: staff, password: staff </li>
            <li> username: user, password: user </li>
          </ul>
        {/* { submitButton() } */}
      </div>
    );
  }
}
 