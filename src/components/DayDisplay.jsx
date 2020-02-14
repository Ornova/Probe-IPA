import React, { useState } from "react";
import "./../scss/daydisplay.scss";
import Menuitem from "./Menuitem";
import { allItems } from "./../json/menu";
//import { useHistory } from "react-router-dom";

const DayDislay = props => {
	const [selectedMenus, setSelectedMenus] = useState([1, 2]);
	let filteredMenus = [];
	//const history = useHistory();

	function compare() {
		if (selectedMenus) {
			selectedMenus.map(n => {
				return allItems.map(item => {
					if (n === item.id) filteredMenus.push(item);
					return n === item.id;
				});
			});
			return filteredMenus.map(m => (
				<Menuitem key={m.id} name={m.name} price={m.price} description={m.desc} id={m.id} />
			));
		}
	}

	return <div className="daydisplay">{compare()}</div>;
};

export default DayDislay;
