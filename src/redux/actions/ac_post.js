import {AT_POST} from '../constants/action_types.js';

export function setPostListAll(postlist) {
    return {
        type: AT_POST.SET.LIST.ALL,
        payload: postlist
    }
}
