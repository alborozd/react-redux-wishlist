import { combineReducers } from "redux";
import categories from "./categories";
import wishes from "./wishes"

export default combineReducers({
    categories,
    wishes
});