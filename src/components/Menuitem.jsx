import React, { useState } from "react";
import "./../scss/menuitem.scss";
//import { useHistory } from "react-router-dom";

const Menuitem = props => {
	const [areButtonsVisible, toggleAreButtonsVisible] = useState(false);
	//const history = useHistory();

	function showButtons() {
		toggleAreButtonsVisible(!areButtonsVisible);
	}

	return (
		<div className="menuitem" id={props.id} onClick={() => showButtons()}>
			<div className="name">{props.name}</div>
			<div className="price">{props.price}</div>
			<div className="description">{props.description}</div>
			{areButtonsVisible ? <input type="button" /> : null}
		</div>
	);
};

export default Menuitem;
