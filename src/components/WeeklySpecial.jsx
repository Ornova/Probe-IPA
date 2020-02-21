import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import Menuitem from "./Menuitem";
import { isChoosingMenuitem } from "./../redux/_actions/menu.actions";
import { allItems } from "./../json/menu";
import "./../scss/daydisplay.scss";

const WeeklySpecial = props => {
	const menuStore = useSelector(state => state.menu);
	const dispatch = useDispatch();
	const history = useHistory();

	/**
	 * handles the "+"-Button and tries to add an Item afterwards
	 */
	function handleButtonClick() {
		dispatch(isChoosingMenuitem({ bool: true, date: moment(props.date).isoWeek() }));
		history.push("/menulist");
	}

	/**
	 * filters for relevant menuitems to display
	 */
	function compare() {
		let filteredByDateMenus = [];
		let filteredMenus = [];

		switch (menuStore.selectedMenu) {
			case "menu1":
				if (menuStore.menu1)
					filteredByDateMenus = menuStore.menu1.filter(n => {
						return n.date === props.date.format("DD-MM-YYYY");
					});
				break;
			case "menu2":
				if (menuStore.menu2)
					filteredByDateMenus = menuStore.menu2.filter(n => {
						return n.date === props.date.format("DD-MM-YYYY");
					});
				break;
			case "menu3":
				if (menuStore.menu3)
					filteredByDateMenus = menuStore.menu3.filter(n => {
						return n.date === props.date.format("DD-MM-YYYY");
					});
				break;

			default:
				return null;
		}
		filteredByDateMenus.map(n => {
			return allItems.map(item => {
				if (n.id === item.id) filteredMenus.push(item);
				return n === item.id;
			});
		});
		// returns menuitems to display them afterwards
		return filteredMenus.map(m => (
			<Menuitem
				key={m.id}
				name={m.name}
				price={m.price}
				description={m.desc}
				id={m.id}
				date={props.date.format("DD-MM-YYYY")}
			/>
		));
	}

	return (
		<div className="weeklyspecial" id={props.id}>
			{compare()}
			{menuStore.isAdmin && (
				<input
					type="button"
					onClick={event => handleButtonClick()}
					value="+"
					className="button"
					style={{
						position: "relative",
						bootom: 0,
						right: 0
					}}
				/>
			)}
		</div>
	);
};

export default WeeklySpecial;
