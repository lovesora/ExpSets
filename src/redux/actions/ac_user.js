import { AT_USER } from '../constants/action_types.js';

export function logged(isLogged) {
    return {
        type: AT_USER.LOGGED,
        payload: isLogged
    }
}
