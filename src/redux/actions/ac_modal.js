import {AT_MODAL} from '../constants/action_types.js';

export function toggleLogin(isOpen = false) {
    return {
        type: AT_MODAL.TOGGLE.LOGIN,
        payload: isOpen
    }
}

export function toggleSignup(isOpen = false) {
    return {
        type: AT_MODAL.TOGGLE.SIGNUP,
        payload: isOpen
    }
}

