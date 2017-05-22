import { createStore } from 'redux';
import Reducers from '../reducers/index.js';
import initialState from './initial_state.js';

export default () => createStore(Reducers, initialState);
