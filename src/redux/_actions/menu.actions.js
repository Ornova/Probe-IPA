export const TOGGLE_ADMIN = "@@menulist/toggleAdmin";
export const ADD_ITEM_TO_MENU = "@@menulist/addItemToMenu";
export const REMOVE_ITEM = "@@menulist/removeItem";
export const CHANGE_MENU = "@@menulist/changeMenu";
export const IS_CHOOSING_MENUITEM = "@@menulist/isChoosingMenuitem";
export const REMOVE_OLD_THINGS = "@@menulist/removeOldThings";
export const IMPORT_MENUS = "@@menulist/importMenus";

export const toggleAdmin = b => {
	return { type: TOGGLE_ADMIN, payload: b };
};
export const addItemToMenu = i => {
	return { type: ADD_ITEM_TO_MENU, payload: i };
};
export const removeItem = i => {
	return { type: REMOVE_ITEM, payload: i };
};
export const changeMenu = menu => {
	return { type: CHANGE_MENU, payload: menu };
};
export const isChoosingMenuitem = b => {
	return { type: IS_CHOOSING_MENUITEM, payload: b };
};
/* to be implemented. -> should delete old unused items from days
 selected where the saturday (day 7) of the week has passed */
export const removeOldThings = date => {
	return { type: REMOVE_OLD_THINGS, payload: date };
};
// imports items from localstorage on startup
export const importMenus = menus => {
	return { type: IMPORT_MENUS, payload: menus };
};
