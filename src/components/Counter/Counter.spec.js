/* eslint-env mocha */
import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Counter from './Counter';

function setup(value = 0) {
  const actions = {
    onClick: expect.createSpy(),
  };
  const component = shallow(
    <Counter value={value} {...actions} />
  );

  return {
    actions,
    component,
    button: component.find('button'),
  };
}

describe('Component: Counter', () => {
  it('should contain button element', () => {
    const { button } = setup();
    expect(button.length).toEqual(1);
  });

  it('button element should have className of root', () => {
    const { button } = setup();
    expect(button.hasClass('root')).toEqual(true);
  });

  it('should have a value', () => {
    const value = 1;
    const { button } = setup(value);
    expect(button.text()).toEqual(`${value}`);
  });

  it('should call onClick when clicked', () => {
    const { button, actions } = setup();
    button.simulate('click');
    expect(actions.onClick).toHaveBeenCalled();
  });
});
