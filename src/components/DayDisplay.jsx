import React from "react";
import "./../scss/daydisplay.scss";
import Menuitem from "./Menuitem";
import { allItems } from "./../json/menu";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { isChoosingMenuitem } from "./../redux/_actions/menu.actions";

const DayDislay = props => {
	const history = useHistory();
	const menuStore = useSelector(state => state.menu);
	const dispatch = useDispatch();

	function handleButtonClick() {
		dispatch(isChoosingMenuitem({ bool: true, date: props.date.format("DD-MM-YYYY") }));
		history.push("/menulist");
	}

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
		<div className="daydisplay" id={props.id}>
			<div>
				{compare()}
				{menuStore.isAdmin && (
					<input
						type="button"
						onClick={event => handleButtonClick()}
						value="+"
						className="button "
						style={{
							position: "relative",
							bootom: 0,
							right: 0
						}}
					/>
				)}
			</div>
		</div>
	);
};

export default DayDislay;
