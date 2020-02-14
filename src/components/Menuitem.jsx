import React from "react";
import "./../scss/menuitem.scss";
//import { useHistory } from "react-router-dom";

const Menuitem = props => {
	//const history = useHistory();

	return (
		<div className="menuitem">
			<div className="name">{props.name}</div>
			<div className="price">{props.price}</div>
			<div className="description">{props.description}</div>
		</div>
	);
};

export default Menuitem;
