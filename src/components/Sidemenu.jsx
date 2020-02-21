import React, { useState } from "react";
import "./../scss/sidemenu.scss";
import { restaurants } from "./../json/restaurants";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeMenu } from "./../redux/_actions/menu.actions";

const Sidemenu = () => {
	// hooks
	const dispatch = useDispatch();
	const history = useHistory();

	// is sidemenu expanded
	const [isExpanded, toggleIsExpanded] = useState();

	/**
	 * listAllNavOptions
	 * lists and displays all given Navigation Options
	 */
	function listAllNavOptions() {
		let restaurantList = [];
		let filteredRestaurants = [];
		// this is to prevent possible errors
		if (restaurants)
			restaurants.filter(r => {
				if (r.visibility === 0) filteredRestaurants.push(r);
				return r.visibility === 0;
			});

		// this is to prevent possible errors
		if (filteredRestaurants)
			// loops through all restaurants where the visiblity is a correct
			filteredRestaurants.map(f =>
				restaurantList.push(
					<li
						key={f.id}
						onClick={() => {
							dispatch(changeMenu(f.statevalue));
							history.push("/cust");
						}}
					>
						{f.name}
					</li>
				)
			);

		return restaurantList.map(r => r);
	}

	return (
		<div className={!isExpanded ? "sidemenu" : "expanded-sidemenu"}>
			<div className="sidemenu-button">
				<label htmlFor="sidemenu-toggler">
					<input
						type="button"
						className="button is-rounded sidemenu-toggler"
						onClick={() => {
							toggleIsExpanded(!isExpanded);
						}}
					></input>
				</label>
			</div>
			{/* if sidemenu is expanded */}
			{isExpanded && <ul>{listAllNavOptions()}</ul>}
		</div>
	);
};

export default Sidemenu;
