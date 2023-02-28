import { createStore } from 'redux';
import { reducer } from './buttonReducer';


const store = createStore(reducer);

export default store;
