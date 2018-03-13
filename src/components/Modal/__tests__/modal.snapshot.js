import React from 'react';
import Modal from '../Modal';

describe('Modal', () => {
  it('should render without crashing', () => {
    let options = {
      isVisible: true,
      title: '',
      showMessage: true,
      message: ''
    };
    const wrapper = shallow(<Modal options={options} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should hide message when showMessage is false', () => {
    let options = {
      isVisible: true,
      title: '',
      showMessage: false,
      message: ''
    };
    const wrapper = shallow(<Modal options={options} />);

    expect(wrapper).toMatchSnapshot();
  });
});