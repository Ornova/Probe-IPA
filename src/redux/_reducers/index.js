import { combineReducers } from "redux";
import menuReducers from "./menu.reducers";

// creates one combined reducer out of all different reducers
export default combineReducers({
	menu: menuReducers
});
