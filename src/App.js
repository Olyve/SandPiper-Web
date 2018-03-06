import React, { Component } from 'react';
import rp from 'request-promise-native';
import {NavLink} from 'react-router-dom';

import './App.css';
import Auth from './components/Auth';

class App extends Component {
  constructor() {
    super();

    this.state = {
      user_id: '',
      token: '',
      base_url: 'http://localhost:3000'//'https://sandpiper-api-staging.herokuapp.com'
    };

    this.handleSignup = this.handleSignup.bind(this);
  }

  handleSignup(data) {
    rp.post({
      url: `${this.state.base_url}/register`,
      body: data,
      simple: false,
      json: true // automatically parses json response string
    }).then((json) => {
      console.log(json);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ul>
            <NavLink exact to='/' activeStyle={{fontWeight: 'bold'}} className='nav'>
              Home
            </NavLink>
          </ul>
          <h1 className="App-title">Welcome to SandPiper</h1>
        </header>
        
        <Auth handleSignup={this.handleSignup}/>
      </div>
    );
  }
}

export default App;
