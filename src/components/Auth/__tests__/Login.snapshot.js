import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../Login';

describe('Login', () => {
  it('should render correctly', () => {
    const rendered = renderer.create(
      <Login />
    );

    expect(rendered.toJSON()).toMatchSnapshot();
  });
});