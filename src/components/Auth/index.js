import React, {Component} from 'react';
import Signup from './Signup';


class Auth extends Component {
  render() {
    return (
      <div>
        <Signup handleSignup={this.props.handleSignup} />
      </div>
    );
  }
}


export default Auth;