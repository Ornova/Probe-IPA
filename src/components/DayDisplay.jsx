import React, { useState, useEffect } from "react";
import "./../scss/daydisplay.scss";
import Menuitem from "./Menuitem";
import { allItems } from "./../json/menu";

const DayDislay = props => {
	useEffect(() => {
		if (props) {
			setPos(document.getElementById(props.id).getBoundingClientRect());
		}
	}, [props]);

	const [selectedMenus, setSelectedMenus] = useState();
	const [pos, setPos] = useState();

	let filteredMenus = [];

	function handleButtonClick() {
		if (pos) console.log("pos", pos);
	}

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

	return (
		<div className="daydisplay" id={props.id}>
			<div>
				{compare()}
				{pos ? (
					<input
						type="button"
						onClick={() => handleButtonClick()}
						value="+"
						className="add-button"
						style={{
							position: "relative",
							left: pos.width - 50 - 4,
							top: -pos.height + 4
						}}
					/>
				) : null}
			</div>
		</div>
	);
};

export default DayDislay;
