import { createStore, combineReducers } from 'redux';
import { buttonReducer } from './buttonReducer';

const rootReducer = combineReducers({
  button: buttonReducer
});

const store = createStore(rootReducer);

export default store;