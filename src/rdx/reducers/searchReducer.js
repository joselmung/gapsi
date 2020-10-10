import {SEARCH} from "../actions/defaultActions";

export function search(state = 'reloj', action) {
    switch (action.type) {
        case SEARCH:
            console.log(action.value);
            return action.value;
        default:
            return state;
    }
}