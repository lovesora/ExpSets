import {AT_SNACKBAR} from '../constants/action_types.js';

export function openSnackbar(msg, duration = 4000) {
    return {
        type: AT_SNACKBAR.OPEN,
        payload: {
            msg: msg,
            duration: duration
        }
    }
}

export function closeSnackbar() {
    return {
        type: AT_SNACKBAR.CLOSE
    }
}
