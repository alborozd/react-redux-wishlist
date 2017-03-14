import { LOAD_CATEGORIES, LOAD_CATEGORY, START, SUCCESS, FAIL } from "../constants";
import { getCategories, getCategoryById } from "../api";

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

export function loadCategory(categoryId) {
    return (dispatch, getState) => {
        dispatch({ type: LOAD_CATEGORY + START });

        getCategoryById(categoryId)
            .then(response => {
                dispatch({
                    type: LOAD_CATEGORY + SUCCESS,
                    payload: response
                });
            }).catch(error => {
                dispatch({
                    type: LOAD_CATEGORY + FAIL,
                    error
                });
            });
    }
}