import React, { useState } from "react";
import "./../scss/menulist.scss";
import "./../scss/buttons.scss";
import Menuitem from "./Menuitem";
import Sidemenu from "./Sidemenu";
import { allItems } from "./../json/menu";
import { useSelector } from "react-redux";
//import { useHistory } from "react-router-dom";

const Menulist = props => {
	const menuStore = useSelector(state => state.menu);
	const [selectedItem, setSelectedItem] = useState("");
	const [selectedItemName, setSelectedItemName] = useState(props.name);
	const [selectedItemPrice, setSelectedItemPrice] = useState(props.price);
	const [selectedItemDescription, setSelectedItemDescription] = useState(props.description);

	function selectItemInList(i) {
		setSelectedItem(i);
		setSelectedItemName(i.name);
		setSelectedItemPrice(i.price);
		setSelectedItemDescription(i.description);
	}
	function cancelButton() {
		setSelectedItem("");
	}

	function showAllItems() {
		return allItems.map(item => {
			return (
				<Menuitem
					key={item.name}
					id={item.id}
					name={item.name}
					price={item.price}
					description={item.desc}
					selectItem={selectItemInList}
				/>
			);
		});
	}

	function changeItem(event) {
		switch (event.currentTarget.id) {
			case "name-field":
				setSelectedItemName(event.currentTarget.value);
				break;

			case "price-field":
				setSelectedItemPrice(event.currentTarget.value);
				break;

			case "description-field":
				setSelectedItemDescription(event.currentTarget.value);
				break;

			default:
				break;
		}
	}

	return (
		<section>
			{/* Displays the Navigation Menu on the lefthand side of the Page */}
			<Sidemenu />
			<div className="menulist">{showAllItems()}</div>
			{menuStore.isAdmin && (
				<button
					type="submit"
					className="button menulist-add"
					onClick={event => {
						event.preventDefault();
					}}
				>
					+
				</button>
			)}
			{menuStore.isAdmin && selectedItem && (
				<div className="editMenuitem">
					<div className="name-tag">Name</div>
					<input
						type="text"
						className="name"
						id="name-field"
						value={selectedItemName}
						onChange={event => changeItem(event)}
					/>
					<div className="price-tag">Price</div>
					<input
						type="text"
						className="price"
						id="price-field"
						value={selectedItemPrice}
						onChange={event => changeItem(event)}
					/>
					<div className="description-tag">Description</div>
					<input
						type="text"
						className="description"
						id="description-field"
						value={selectedItemDescription}
						onChange={event => changeItem(event)}
					/>
					<div className="control-buttons-critical">
						<button
							type="submit"
							className="button is-rounded is-danger"
							onChange={event => {
								event.preventDefault();
							}}
						>
							Delete
						</button>
					</div>
					<div className="control-buttons-non-critical">
						<button
							type="submit"
							className="button is-rounded is-danger"
							onClick={event => {
								event.preventDefault();
							}}
						>
							Add
						</button>
						<button
							type="submit"
							className="button is-rounded is-danger"
							onClick={event => cancelButton()}
						>
							Cancel
						</button>
					</div>
				</div>
			)}
		</section>
	);
};

export default Menulist;
