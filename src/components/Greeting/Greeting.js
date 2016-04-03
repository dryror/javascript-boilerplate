import React, { PropTypes } from 'react';
import styles from './Greeting.css';

const Greeting = (props) => {
  const { onClick, message } = props;
  return (
    <h1
      className={styles.root}
      onClick={onClick}
    >
      {message}
    </h1>
  );
};

Greeting.propTypes = {
  onClick: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default Greeting;
