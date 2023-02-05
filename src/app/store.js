import { createStore } from 'redux';
import { buttonReducer } from './buttonReducer';


const store = createStore(buttonReducer);

export default store;