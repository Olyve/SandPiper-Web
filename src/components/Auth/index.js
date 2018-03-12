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
    var child;

    if (this.state.showLogin) {
      child = <Login handleLogin={this.props.handleLogin} />;
    }
    else {
      child = <Signup handleSignup={this.props.handleSignup} />;
    }

    return (
      <div className='auth'>
        {child}
        <button onClick={this.toggleView}>Toggle Display</button>
      </div>
    );
  }
}


export default Auth;