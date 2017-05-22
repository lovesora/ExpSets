import {AT_MODAL} from '../constants/action_types.js';

export default (state = {}, action) => {
    switch (action.type) {
        case AT_MODAL.TOGGLE.LOGIN: {
            return {...state, toggle: {
                isLogin: action.payload
            }};
        }
        case AT_MODAL.TOGGLE.SIGNUP: {
            return {...state, toggle: {
                isSignup: action.payload
            }};
        }
        default:
            return state;
    }
}
