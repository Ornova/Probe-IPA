import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./../scss/menuitem.scss";
import { addItemToMenu, isChoosingMenuitem, removeItem } from "./../redux/_actions/menu.actions";
import { useHistory } from "react-router-dom";

const Menuitem = props => {
	useEffect(() => {
		if (props.id) {
			setPos(document.getElementById(props.id).getBoundingClientRect());
		}
	}, [props, props.id]);

	const dispatch = useDispatch();
	const menuStore = useSelector(state => state.menu);
	const history = useHistory();

	const [areButtonsVisible, toggleAreButtonsVisible] = useState(false);
	const [pos, setPos] = useState();

	function showButtons() {
		toggleAreButtonsVisible(!areButtonsVisible);
		// console.log(pos);
	}

	function selectMenuitem(id) {
		dispatch(
			addItemToMenu({
				selectedMenu: menuStore.selectedMenu,
				date: menuStore.isChoosingMenuitem.date,
				selectMenuitem: id
			})
		);
		dispatch(isChoosingMenuitem({ bool: false, id: null }));
		history.push("/cust");
	}

	/*
	function selectMenuitem(id) {
		dispatch(
			addItemToMenu({
				selectedMenu: menuStore.selectedMenu,
				date: menuStore.isChoosingMenuitem.date,
				selectMenuitem: id
			})
		);
		dispatch(isChoosingMenuitem({ bool: false, id: null }));
		history.push("/cust");
	}
	*/

	return (
		<div>
			<div
				className="menuitem"
				id={props.id}
				onClick={() => {
					return menuStore.isChoosingMenuitem.bool
						? selectMenuitem(props.id)
						: showButtons();
				}}
			>
				<div className="name">{props.name}</div>
				<div className="price">{props.price}</div>
				<div className="description">{props.description}</div>
			</div>
			{areButtonsVisible ? (
				<input
					value="..."
					type="button"
					onClick={() => {}}
					className="menuitem-button menuitem-button-1"
					style={{ position: "relative", left: pos.width, top: -pos.height }}
				/>
			) : null}
			{areButtonsVisible ? (
				<input
					value="Clear"
					type="button"
					onClick={() => {}}
					className="menuitem-button menuitem-button-2"
					style={{ position: "relative", left: pos.width, top: -pos.height }}
				/>
			) : null}
		</div>
	);
};

export default Menuitem;
