import { combineReducers } from 'redux';
import modal from './modal.js';
import header from './header.js';
import drawer from './drawer.js';
import user from './user.js';

export default combineReducers({modal, header, drawer, user});
