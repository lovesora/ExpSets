import { AT_USER } from '../constants/action_types.js';

export function logged(cookieName) {
    return {
        type: AT_USER.LOGGED,
        payload: cookieName
    }
}
