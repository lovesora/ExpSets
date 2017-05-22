import {AT_HEADER} from '../constants/action_types.js';

export function eleFinished(eleId) {
    return {
        type: AT_HEADER.CHANGE_BGC.BY_ELE,
        payload: eleId
    }
}
