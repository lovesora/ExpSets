import {AT_HEADER} from '../constants/action_types.js';

export default (state={}, action) => {
    switch (action.type) {
        case AT_HEADER.CHANGE_BGC.BY_ELE: {
            return {...state, changeBgc: {
                byEle: action.payload
            }}
        }
        default:
            return state;
    }
}
