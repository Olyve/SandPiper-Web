import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';

import './App.css';
import Auth from './components/Auth';
import { registerUser } from './networking';

class App extends Component {
  constructor() {
    super();

    this.state = {
      user_id: '',
      token: ''
    };

    this.handleSignup = this.handleSignup.bind(this);
  }

  handleSignup(data) {
    registerUser(data)
      .then((json) => {
        let message = json['messages'].reduce((acc, current) => acc + '\n' + current);
        alert(message);
      });
  }

  render() {
    return (
      <div className='App container'>
        <div className='grid-n'>
          <ul>
            <NavLink exact to='/' activeStyle={{fontWeight: 'bold'}} className='nav-item'>
              Home
            </NavLink>
          </ul>
        </div>

        <div className='grid-l'>
          <ul>
            <NavLink exact to='/login' activeStyle={{fontWeight: 'bold'}} className='nav-item'>
              Login
            </NavLink>
          </ul>
        </div>
        
        <div className='grid-c'>
          <Route exact path='/login' render={() => <Auth handleSignup={this.handleSignup}/>}/>
        </div>
      </div>
    );
  }
}

export default App;
