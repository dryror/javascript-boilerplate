/* eslint-env mocha */
import expect from 'expect';
import counter from './counter';

describe('Reducer: counter', () => {
  it('should handle initial state', () => {
    expect(
      counter(undefined, {})
    ).toEqual(0);
  });

  it('should handle INCREMENT', () => {
    expect(counter(0, { type: 'INCREMENT' })).toEqual(1);
  });
});
