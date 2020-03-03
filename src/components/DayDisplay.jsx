import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Menuitem from "./Menuitem";
import { isChoosingMenuitem } from "./../redux/_actions/menu.actions";
import { allItems } from "./../json/menu";

import "./../scss/daydisplay.scss";

const DayDislay = props => {
	//hooks
	const history = useHistory();
	const menuStore = useSelector(state => state.menu);
	const dispatch = useDispatch();

	/**
	 * handles the click of the "+"-Button to add an item to the day
	 */
	function handleButtonClick() {
		dispatch(isChoosingMenuitem({ bool: true, date: props.date.format("DD.MM.YYYY") }));
		// redirect to the menulist
		history.push("/menulist");
	}

	/**
	 * goes through the whole list of menus to sort out which ones are relevant for us
	 * in respect to the menu and the date they are selected for
	 */
	function compare() {
		let filteredByDateMenus = [];
		let filteredMenus = [];

		//filters for the menu
		switch (menuStore.selectedMenu) {
			case "menu1":
				if (menuStore.menu1)
					filteredByDateMenus = menuStore.menu1.filter(n => {
						// filter for the day
						return n.date === props.date.format("DD.MM.YYYY");
					});
				break;
			case "menu2":
				if (menuStore.menu2)
					filteredByDateMenus = menuStore.menu2.filter(n => {
						return n.date === props.date.format("DD.MM.YYYY");
					});
				break;
			case "menu3":
				if (menuStore.menu3)
					filteredByDateMenus = menuStore.menu3.filter(n => {
						return n.date === props.date.format("DD.MM.YYYY");
					});
				break;

			default:
				return null;
		}
		filteredByDateMenus.map(n => {
			return allItems.map(item => {
				if (n.id === item.id) {
					filteredMenus.push(item);
					console.log(item);
				}
				return n === item.id;
			});
		});

		// output of all menuitems one for one
		return filteredMenus.map(m => (
			<Menuitem
				key={m.id}
				name={m.name}
				price={m.price}
				description={m.desc}
				id={m.id}
				date={props.date.format("DD.MM.YYYY")}
			/>
		));
	}

	return (
		<div id={props.id} className="scrollsnap">
			{props.name}
			<section className="daydisplay">
				{compare()}
				{menuStore.isAdmin && (
					<button type="submit" onClick={() => handleButtonClick()} className="button">
						+
					</button>
				)}
			</section>
		</div>
	);
};

export default DayDislay;
