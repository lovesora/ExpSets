import { AT_USER } from '../constants/action_types.js';

export default (state={}, action) => {
    switch (action.type) {
        case AT_USER.LOGGED: {
            return {...state, logged: action.payload}
        }
        default:
            return state;
    }
}
