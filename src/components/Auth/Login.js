import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(event) {
    let target = event.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    this.props.handleLogin({
      email: this.state.email,
      password: this.state.password
    });
    this.setState({
      email: '',
      password: ''
    });

    event.preventDefault();
  }

  render() {
    return (
      <div className='login'>
        <h2>Login</h2>
        <form>
          <label>Email: 
          <input type='text' name='email' value={this.state.email} onChange={this.onChange} />
          </label>
          <br />
          <label>Password: 
          <input type='password' name='password' value={this.state.password} onChange={this.onChange} />
          </label>
          <br />
          <button className='submit' onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;