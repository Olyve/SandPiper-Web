import React, { Component } from 'react';
import cx from 'classnames';
import './Modal.css';

class Modal extends Component {
  render() {
    const messageClasses = cx({
      'modal-message': true,
      'hidden': !this.props.options.showMessage
    });

    return (
      <div className='modal'>
        <div className='modal-popup'>
          <div>
            <h3 className='modal-title'>{this.props.options.title}</h3>
          </div>
          <div>
            <p className={messageClasses}>
              {this.props.options.message}
            </p>
          </div>
          <div className='modal-buttons'>
            <button className='modal-confirm' onClick={this.props.handleConfirm}>
              Okay
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;