import React, {Component} from 'react';
import Signup from './Signup';
import Login from './Login';
import './index.css';


class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showLogin: true
    };

    this.toggleView = this.toggleView.bind(this);
  }

  toggleView() {
    this.setState({showLogin: !this.state.showLogin});
  }

  render() {
    var component;
    var message;

    if (this.state.showLogin) {
      component = <Login handleLogin={this.props.handleLogin} />;
      message = <h4>If you don't have an account <a onClick={this.toggleView}>click here</a> to register.</h4>;
    }
    else {
      component = <Signup handleSignup={this.props.handleSignup} />;
      message = <h4>If you already have an account <a onClick={this.toggleView}>click here</a> to log in.</h4>;
    }

    return (
      <div className='auth'>
        {component}
        {message}
      </div>
    );
  }
}


export default Auth;