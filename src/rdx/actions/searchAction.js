import {SEARCH} from "./defaultActions";

export const setSearch = value => ({type: SEARCH, value});


export const getSearch = (value) =>{
    return dispatch => {
        dispatch(setSearch(value));
    }
} 
