import React from 'react';
import renderer from 'react-test-renderer';
import Signup from '../Signup';

describe('Signup', () => {
  it('should render correctly', () => {
    const rendered = renderer.create(
      <Signup />
    );

    expect(rendered.toJSON()).toMatchSnapshot();
  });
});