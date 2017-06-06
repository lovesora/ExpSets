import {AT_DRAWER} from '../constants/action_types.js';

export default (state={}, action) => {
    switch (action.type) {
        case AT_DRAWER.TOGGLE: {
            return {...state, isOpen:action.payload }
        }
        default:
            return state;
    }
}
