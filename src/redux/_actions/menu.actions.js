export const IS_CHOOSING_MENUITEM = "@@menulist/isChoosingMenuitem";
export const ADD_ITEM_TO_MENU = "@@menulist/addItemToMenu";
export const REMOVE_ITEM = "@@menulist/removeItem";
export const REMOVE_OLD_THINGS = "@@menulist/removeOldThings";

export const isChoosingMenuitem = b => {
	return { type: IS_CHOOSING_MENUITEM, payload: b };
};
export const addItemToMenu = i => {
	return { type: ADD_ITEM_TO_MENU, payload: i };
};
export const removeItem = ({ id, date }) => {
	return { type: REMOVE_ITEM, payload: { id, date } };
};
export const removeOldThings = date => {
	return { type: REMOVE_OLD_THINGS, payload: date };
};
