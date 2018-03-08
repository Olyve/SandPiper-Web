import React, {Component} from 'react';
import Signup from './Signup';
import './index.css';


class Auth extends Component {
  render() {
    return (
      <div className='auth'>
        <div>Login</div>
        <Signup className='grid-signup' handleSignup={this.props.handleSignup} />
      </div>
    );
  }
}


export default Auth;