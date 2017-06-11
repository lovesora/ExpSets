import {AT_POST} from '../constants/action_types.js';

export default (state={}, action) => {
    switch (action.type) {
        case AT_POST.SET.LIST.ALL: {
            return $.extend(true, state, {
                list: {
                    all: action.payload
                }
            });
        }
        default:
            return state;
    }
}
