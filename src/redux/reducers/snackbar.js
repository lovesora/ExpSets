import {AT_SNACKBAR} from '../constants/action_types.js';

export default (state={}, action) => {
    switch (action.type) {
        case AT_SNACKBAR.OPEN: {
            return {
                ...state,
                isOpen: true,
                msg: action.payload.msg,
                duration: action.payload.duration
            }
        }
        case AT_SNACKBAR.CLOSE: {
            return {
                ...state,
                isOpen: false
            }
        }
        default:
            return state;
    }
}
