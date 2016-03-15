import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './components/Greeting';

// Enable hot module replacement
if (module.hot) {
  module.hot.accept();
}

// Render the app
ReactDOM.render(
  <Greeting message="hello, world!" />,
  document.getElementById('container')
);
