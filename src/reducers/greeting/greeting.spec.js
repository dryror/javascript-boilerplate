/* eslint-env mocha */
import expect from 'expect';
import greeting from './greeting';

describe('Reducer: greeting', () => {
  it('should handle initial state', () => {
    expect(
      greeting(undefined, {})
    ).toEqual('Hello, World!');
  });

  it('should handle REVERSE_GREETING', () => {
    expect(greeting('hello', { type: 'REVERSE_GREETING' })).toEqual('olleh');
  });
});
