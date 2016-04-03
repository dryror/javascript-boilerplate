import React, { PropTypes } from 'react';
import styles from './Counter.css';

const Counter = (props) => {
  const { onClick, value } = props;
  return (
    <button
      className={styles.root}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

Counter.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default Counter;
