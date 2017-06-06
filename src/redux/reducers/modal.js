import {AT_MODAL} from '../constants/action_types.js';

export default (state = {}, action) => {
    switch (action.type) {
        case AT_MODAL.TOGGLE.LOGIN: {
            return {...state, toggle: {
                openLogin: action.payload
            }};
        }
        case AT_MODAL.TOGGLE.SIGNUP: {
            return {...state, toggle: {
                openSignup: action.payload
            }};
        }
        default:
            return state;
    }
}
