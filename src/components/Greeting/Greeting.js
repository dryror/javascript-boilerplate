import React from 'react';
import cssModules from 'react-css-modules';
import styles from './Greeting.css';

const Greeting = (props) =>
  <h1 styleName="root">
    {props.message}
  </h1>;

Greeting.propTypes = {
  message: React.PropTypes.string.isRequired,
};

export default cssModules(Greeting, styles);
