import React, { Component } from 'react';
import './Signup.css';

class Signup extends Component {
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
    this.props.handleSignup({ ...this.state });
    this.setState({
      email: '',
      password: ''
    });

    event.preventDefault();
  }

  render() {
    return (
      <div className='signup'>
        <h2>Register New User</h2>
        <form>
          <div>
            <label>Email: </label>
            <input type='text' name='email' value={this.state.email} onChange={this.onChange} />
          </div>
          <div>
            <label>Password: </label> 
            <input type='password' name='password' value={this.state.password} onChange={this.onChange}/>
          </div>
          <div>
            <button className='submit' onClick={this.handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;