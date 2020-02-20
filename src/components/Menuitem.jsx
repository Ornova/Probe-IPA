import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./../scss/menuitem.scss";
import { addItemToMenu, isChoosingMenuitem, removeItem } from "./../redux/_actions/menu.actions";
import { useHistory } from "react-router-dom";

const Menuitem = props => {
	const dispatch = useDispatch();
	const menuStore = useSelector(state => state.menu);
	const history = useHistory();

	const [areButtonsVisible, toggleAreButtonsVisible] = useState(false);

	function showButtons() {
		if (menuStore.isAdmin) {
			toggleAreButtonsVisible(!areButtonsVisible);
		}
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
		if (menuStore.isAdmin) history.push("/admin");
		else history.push("/");
	}

	function changeItemPreparation() {
		dispatch(isChoosingMenuitem({ bool: true, date: props.date }));
		history.push("/menulist");

		dispatch(removeItem({ date: props.date, id: props.id }));
	}

	return (
		<div>
			<div
				className="menuitem"
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

				{menuStore.isAdmin && areButtonsVisible && (
					<div>
						<input
							value="..."
							type="button"
							onClick={() => {
								changeItemPreparation();
							}}
							className="button menuitem-button-1"
						/>
						<input
							value="Clear"
							type="button"
							onClick={() => {
								dispatch(removeItem({ date: props.date, id: props.id }));
							}}
							className="button menuitem-button-2"
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default Menuitem;
