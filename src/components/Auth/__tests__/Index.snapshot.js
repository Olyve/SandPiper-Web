import React from 'react';
import renderer from 'react-test-renderer';
import Auth from '../index';

describe('Auth', () => {
  it('should render correctly', () => {
    const rendered = renderer.create(
      <Auth />
    );

    expect(rendered.toJSON()).toMatchSnapshot();
  });
});