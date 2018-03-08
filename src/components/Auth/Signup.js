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

    event.preventDefault();
  }

  render() {
    return (
      <div className='signup'>
        <form>
          <label>Email: 
          <input type='text' name='email' onChange={this.onChange}/>
          </label>
          <br />
          <label>Password: 
          <input type='password' name='password' onChange={this.onChange}/>
          </label>
          <br />
          <button className='submit' onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Signup;