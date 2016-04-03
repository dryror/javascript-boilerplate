import React from 'react';
import styles from './App.css';

import CounterButton from '../../containers/CounterButton';
import GreetingText from '../../containers/GreetingText';

const App = () =>
  <div className={styles.root}>
    <GreetingText />
    <CounterButton />
  </div>;

export default App;
