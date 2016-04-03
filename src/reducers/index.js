import { combineReducers } from 'redux';
import counter from './counter';
import greeting from './greeting';

const rootReducer = combineReducers({
  counter,
  greeting,
});

export default rootReducer;
