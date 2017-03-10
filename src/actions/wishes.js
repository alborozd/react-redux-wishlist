import { LOAD_WISHES, START, SUCCESS, FAIL } from "../constants";
import { getWishesByCategory } from "../api";

export function loadWishesByCategory(categoryId) {
    return (dispatch, getState) => {
        dispatch({
            type: LOAD_WISHES + START
        });

        getWishesByCategory(categoryId)
            .then(response => {
                dispatch({
                    type: LOAD_WISHES + SUCCESS,
                    payload: { categories: response.categories }
                });
            }).catch(error => {
                dispatch({
                    type: LOAD_WISHES + FAIL,
                    error
                });
            });
    }
}