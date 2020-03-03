import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addItemToMenu, isChoosingMenuitem, removeItem } from "./../redux/_actions/menu.actions";
import "./../scss/menuitem.scss";

const Menuitem = props => {
	//hooks
	const dispatch = useDispatch();
	const menuStore = useSelector(state => state.menu);
	const history = useHistory();

	const [areButtonsVisible, toggleAreButtonsVisible] = useState(false);

	/**
	 * showButtons
	 * displayes Buttons if the user is logged in as an admin
	 */
	function showButtons() {
		if (menuStore.isAdmin) {
			toggleAreButtonsVisible(!areButtonsVisible);
		}
	}

	/**
	 * selectMenuitem
	 * @param {number} id the id of the selected menuitem, aka its unique identifier
	 * adds an item to the Daydisplay by adding it to a list of Objects with date id and what menu to add it to
	 */
	function selectMenuitem(id) {
		/* Adds Item to menu */
		dispatch(
			addItemToMenu({
				selectedMenu: menuStore.selectedMenu,
				date: menuStore.isChoosingMenuitem.date,
				selectMenuitem: id
			})
		);
		/* changing mode to item choosing mode */
		dispatch(isChoosingMenuitem({ bool: false, id: null }));
		/*
		 rediriect to the full adminplaning view if the user is an admin 
		 if they should not be an admin the will be redirected to the customer page,
		 even if it is unlikely to happen there might be a possibility for this to happen, thus this was implemented
		*/
		if (menuStore.isAdmin) history.push("/admin");
		else history.push("/");
	}

	/**
	 * changeItemPreparation
	 * prepares everything so that the item can be easily added to the day
	 */
	function changeItemPreparation(event) {
		event.preventDefault();
		/* changing mode to item choosing mode */
		dispatch(isChoosingMenuitem({ bool: true, date: props.date }));
		/* rediriect to the full menulist */
		history.push("/menulist");
		/* should be in a callback that waits for the input of the item select */
		dispatch(removeItem({ date: props.date, id: props.id }));
	}

	return (
		<div
			className="menuitem is-rounded"
			id={props.id}
			onClick={() => {
				return menuStore.isChoosingMenuitem.bool
					? selectMenuitem(props.id)
					: props.date
					? showButtons()
					: props.selectItem({
							id: props.id,
							name: props.name,
							price: props.price,
							description: props.description
					  });
			}}
		>
			<div className="name">{props.name}</div>
			<div className="price">{props.price}</div>
			<div className="description">{props.description}</div>

			{/* if the user is an admin and areButtonsVisible is true then the following code will be exceuted */}
			{menuStore.isAdmin && areButtonsVisible && (
				<div>
					<button
						type="submit"
						onClick={event => {
							changeItemPreparation(event);
						}}
						className="button menuitem-button-1"
					>
						...
					</button>
					<button
						type="submit"
						onClick={event => {
							event.preventDefault();
							dispatch(removeItem({ date: props.date, id: props.id }));
						}}
						className="button menuitem-button-2"
					>
						Remove Item
					</button>
				</div>
			)}
		</div>
	);
};

export default Menuitem;
