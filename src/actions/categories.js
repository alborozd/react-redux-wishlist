import { LOAD_CATEGORIES, START, SUCCESS, FAIL } from "../constants";
import { getCategories } from "../api";

export function loadCategories() {
    return (dispatch, getState) => {
        dispatch({
            type: LOAD_CATEGORIES + START
        });

        getCategories()
            .then(response => {
                dispatch({
                    type: LOAD_CATEGORIES + SUCCESS,
                    payload: { categories: response.categories }
                });
            }).catch(error => {
                dispatch({
                    type: LOAD_CATEGORIES + FAIL,
                    error
                });
            });
    }
}