/* eslint-env mocha */
import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Greeting from './Greeting';

function setup(message = 'hello') {
  const actions = {
    onClick: expect.createSpy(),
  };

  const component = shallow(
    <Greeting message={message} {...actions} />
  );

  return {
    actions,
    component,
    h1: component.find('h1'),
  };
}

describe('Component: Greeting', () => {
  it('should contain h1 element', () => {
    const { h1 } = setup();
    expect(h1.length).toEqual(1);
  });

  it('h1 element should have className of root', () => {
    const { h1 } = setup();
    expect(h1.hasClass('root')).toEqual(true);
  });

  it('should display message', () => {
    const message = 'Hello, World';
    const { h1 } = setup(message);
    expect(h1.text()).toEqual(message);
  });

  it('should call onClick when clicked', () => {
    const { h1, actions } = setup();
    h1.simulate('click');
    expect(actions.onClick).toHaveBeenCalled();
  });
});
