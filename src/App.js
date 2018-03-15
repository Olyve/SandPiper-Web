import React, { Component } from 'react';
import { NavLink, Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './App.css';
import Auth from './components/Auth';
import Modal from './components/Modal/Modal';
import { registerUser, loginUser } from './Utilities/networking';
import * as Actions from './Utilities/actions';

export class App extends Component {

  handleSignup(data) {
    // Show modal
    this.props.showLoadingModal();

    registerUser(data)
      .then((json) => {
        let message = json['messages'].reduce((acc, current) => acc + '\n' + current);
        this.props.showModal(json['status'], message);
      });
  }

  handleLogin(data) {
    // Show Modal
    this.props.showLoadingModal();
    
    // Kick off request to API
    loginUser(data)
      .then((json) => {
        let message = json['messages'].reduce((acc, current) => acc + '\n' + current);
        this.props.showModal(json['status'], message);

        // If login was successful add token and user_id to state 
        if (json['status'] === 'Success') {
          this.props.updateUser({
            token: json['data']['token'],
            user_id: json['data']['user_id']
          });
        }
      });
  }

  handleConfirm() {
    // Hide the modal
    this.props.resetModal();
  }

  showModal() {
    if (this.props.displayModal) {
      return <Modal handleConfirm={() => this.handleConfirm()} />
    }
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

function mapStateToProps(state) {
  return { 
    user: state.user,
    displayModal: state.modal.isVisible 
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
