import React, { useState, useEffect } from "react";
import "./../scss/menuitem.scss";
//import { useHistory } from "react-router-dom";

const Menuitem = props => {
	useEffect(() => {
		if (props.id) {
			console.log(props);
			setPos(document.getElementById(props.id).getBoundingClientRect());
		}
	}, [props, props.id]);
	const [areButtonsVisible, toggleAreButtonsVisible] = useState(false);
	const [pos, setPos] = useState();
	//const history = useHistory();

	function showButtons() {
		toggleAreButtonsVisible(!areButtonsVisible);
		console.log(pos);
	}

	return (
		<div className="menuitem" id={props.id} onClick={() => showButtons()}>
			<div className="name">{props.name}</div>
			<div className="price">{props.price}</div>
			<div className="description">{props.description}</div>
			{areButtonsVisible ? (
				<input
					type="button"
					className="menuitem-button menuitem-button-1"
					style={{ position: "relative", left: pos.width, top: -pos.height }}
				/>
			) : null}
			{areButtonsVisible ? (
				<input
					type="button"
					className="menuitem-button menuitem-button-2"
					style={{ position: "relative", left: pos.width, top: -pos.height }}
				/>
			) : null}
		</div>
	);
};

export default Menuitem;
