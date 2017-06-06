import {AT_DRAWER} from '../constants/action_types.js';

export function toggleDrawer(isOpen) {
    return {
        type: AT_DRAWER.TOGGLE,
        payload: isOpen
    }
}
