import { combineReducers } from "redux";
import menuReducers from "./menu.reducers";

export default combineReducers({
	menu: menuReducers
});
