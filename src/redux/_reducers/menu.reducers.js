import {
	IS_CHOOSING_MENUITEM,
	ADD_ITEM_TO_MENU,
	REMOVE_ITEM,
	REMOVE_OLD_THINGS
} from "./../_actions/menu.actions";

const preloadedState = {
	isChoosingMenuitem: { bool: false, date: null },
	whichIsChoosing: null,
	selectedMenu: "menu1",
	menu1: [],
	menu2: [],
	menu3: []
};

export default (state = preloadedState, action) => {
	switch (action.type) {
		case IS_CHOOSING_MENUITEM:
			return Object.assign({}, state, {
				isChoosingMenuitem: action.payload
			});
		case ADD_ITEM_TO_MENU:
			switch (action.payload.selectedMenu) {
				case "menu1":
					return Object.assign({}, state, {
						menu1: [
							...state.menu1,
							{ date: action.payload.date, id: action.payload.selectMenuitem }
						]
					});
				case "menu2":
					return Object.assign({}, state, {
						menu2: [
							...state.menu2,
							{ date: action.payload.date, id: action.payload.selectMenuitem }
						]
					});
				case "menu3":
					return Object.assign({}, state, {
						menu3: [
							...state.menu3,
							{ date: action.payload.date, id: action.payload.selectMenuitem }
						]
					});
				default:
					return state;
			}
		case REMOVE_OLD_THINGS:
			return Object.assign({}, state, {
				isChoosingMenuitem: action.payload
			});
		case REMOVE_ITEM:
			const menu = {
				menu1: [
					...state.menu1,
					{ date: action.payload.date, id: action.payload.selectMenuitem }
				]
			};
			return Object.assign({}, state, {
				isChoosingMenuitem: action.payload
			});
		default:
			return state;
	}
};
