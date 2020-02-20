import { writeToLocal, getFromLocal } from "./../../json/menu";
import {
	TOGGLE_ADMIN,
	CHANGE_MENU,
	IS_CHOOSING_MENUITEM,
	ADD_ITEM_TO_MENU,
	REMOVE_ITEM,
	REMOVE_OLD_THINGS,
	IMPORT_MENUS
} from "./../_actions/menu.actions";

const preloadedState = {
	isAdmin: false,
	isChoosingMenuitem: { bool: false, date: null },
	selectedMenu: "menu1",
	menu1: [],
	menu2: [],
	menu3: []
};

export default (state = preloadedState, action) => {
	switch (action.type) {
		case TOGGLE_ADMIN:
			return Object.assign({}, state, {
				isAdmin: action.payload
			});
		case CHANGE_MENU:
			return Object.assign({}, state, {
				selectedMenu: action.payload
			});
		case ADD_ITEM_TO_MENU:
			switch (action.payload.selectedMenu) {
				case "menu1":
					const updatedMenu1 = [
						...state.menu1,
						{ date: action.payload.date, id: action.payload.selectMenuitem }
					];
					writeToLocal("menu1", updatedMenu1);
					return Object.assign({}, state, { menu1: updatedMenu1 });

				case "menu2":
					const updatedMenu2 = [
						...state.menu2,
						{ date: action.payload.date, id: action.payload.selectMenuitem }
					];
					writeToLocal("menu2", updatedMenu2);
					return Object.assign({}, state, { menu2: updatedMenu2 });

				case "menu3":
					const updatedMenu3 = [
						...state.menu3,
						{ date: action.payload.date, id: action.payload.selectMenuitem }
					];
					writeToLocal("menu3", updatedMenu3);
					return Object.assign({}, state, { menu3: updatedMenu3 });

				default:
					return state;
			}
		case REMOVE_ITEM:
			let menu = [];
			console.log(action);
			console.log(action.payload);
			switch (state.selectedMenu) {
				case "menu1":
					menu = state.menu1.filter(
						i => !(i.date === action.payload.date && i.id === action.payload.id)
					);

					writeToLocal("menu1", menu);
					return Object.assign({}, state, {
						menu1: menu
					});
				case "menu2":
					menu = state.menu2.filter(
						i => !(i.date === action.payload.date && i.id === action.payload.id)
					);
					writeToLocal("menu2", menu);
					return Object.assign({}, state, {
						menu2: menu
					});
				case "menu3":
					menu = state.menu3.filter(
						i => !(i.date === action.payload.date && i.id === action.payload.id)
					);
					writeToLocal("menu3", menu);
					return Object.assign({}, state, {
						menu3: menu
					});
				default:
					console.error("removeItemError: 0815");
			}
			break;

		case IS_CHOOSING_MENUITEM:
			return Object.assign({}, state, {
				isChoosingMenuitem: action.payload
			});
		case REMOVE_OLD_THINGS:
			return Object.assign({}, state, {
				isChoosingMenuitem: action.payload
			});
		case IMPORT_MENUS:
			return Object.assign({}, state, {
				menu1: action.payload.menu1,
				menu2: action.payload.menu2,
				menu3: action.payload.menu3
			});
		default:
			return state;
	}
};
