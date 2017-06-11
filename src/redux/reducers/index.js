import { combineReducers } from 'redux';
import modal from './modal.js';
import header from './header.js';
import drawer from './drawer.js';
import user from './user.js';
import snackbar from './snackbar.js';
import post from './post.js';

export default combineReducers({modal, header, drawer, user, snackbar, post});
