import React from "react";
import "./../scss/menulist.scss";
import Menuitem from "./Menuitem";
import Sidemenu from "./Sidemenu";
import { allItems } from "./../json/menu";
//import { useHistory } from "react-router-dom";

const Menulist = props => {
	//const history = useHistory();

	function showAllItems() {
		return allItems.map(item => {
			return (
				<Menuitem
					key={item.name}
					name={item.name}
					price={item.price}
					description={item.desc}
				/>
			);
		});
	}

	return (
		<div>
			<Sidemenu />
			<div className="menulist">{showAllItems()}</div>
		</div>
	);
};

export default Menulist;
