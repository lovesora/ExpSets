import {AT_SNACKBAR} from '../constants/action_types.js';

export function openSnackbar({ msg, ...rest }) {
    return {
        type: AT_SNACKBAR.OPEN,
        payload: {
            msg: msg,
            duration: rest.duration || 4000,
            onRequestClose: rest.onRequestClose || ()=>{}
        }
    }
}
