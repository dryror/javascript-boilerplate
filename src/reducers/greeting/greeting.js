export default function greeting(state = 'Hello, World!', action) {
  switch (action.type) {
    case 'REVERSE_GREETING':
      return state.split('').reverse().join('');
    default:
      return state;
  }
}
