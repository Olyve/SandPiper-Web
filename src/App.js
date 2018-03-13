import React, { Component } from 'react';
import { NavLink, Route, BrowserRouter } from 'react-router-dom';

import './App.css';
import Auth from './components/Auth';
import Modal from './components/Modal/Modal';
import { registerUser, loginUser } from './networking';

class App extends Component {
  constructor() {
    super();

    this.state = {
      user_id: '',
      token: '',
      displayModal: {
        isVisible: false,
        title: 'title',
        showMessage: true,
        message: 'message'
      }
    };
  }

  handleSignup(data) {
    // Show modal
    this.showLoadingModal();

    registerUser(data)
      .then((json) => {
        this.setState({
          displayModal: {
            isVisible: true,
            title: json['status'],
            showMessage: true,
            message: json['messages'].reduce((acc, current) => acc + '\n' + current)
          }
        });
      });
  }

  handleLogin(data) {
    // Show Modal
    this.showLoadingModal();
    
    // Kick off request to API
    loginUser(data)
      .then((json) => {
        this.setState({
          displayModal: {
            isVisible: true,
            title: json['status'],
            showMessage: true,
            message: json['messages'].reduce((acc, current) => acc + '\n' + current)
          }
        });
      });
  }

  handleConfirm() {
    // Hide the modal
    this.resetModalAndHide();
  }

  showModal() {
    if (this.state.displayModal.isVisible) {
      return <Modal handleConfirm={() => this.handleConfirm()} options={this.state.displayModal}/>
    }
  }

  // Used to show the loading popup
  showLoadingModal() {
    this.setState({
      displayModal: {
        isVisible: true,
        title: 'Loading...',
        showMessage: false
      }
    });
  }

  resetModalAndHide() {
    this.setState({
      displayModal: {
        isVisible: false,
        title: '',
        message: ''
      }
    });
  }

  render() {
    return (
      <div>
        <BrowserRouter>
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
              <Route exact path='/login' render={() => 
                <Auth handleSignup={(i) => this.handleSignup(i)} handleLogin={(i) => this.handleLogin(i)} />
              } />
            </div>
          </div>
        </BrowserRouter>
        {/* Modal Popup */}
        {this.showModal()}
      </div>
    );
  }
}

export default App;
