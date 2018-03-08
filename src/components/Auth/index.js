import React, {Component} from 'react';
import Signup from './Signup';
import Login from './Login';
import './index.css';


class Auth extends Component {
  render() {
    return (
      <div className='auth'>
        <Login handleLogin={this.props.handleLogin} />
        <Signup handleSignup={this.props.handleSignup} />
      </div>
    );
  }
}


export default Auth;