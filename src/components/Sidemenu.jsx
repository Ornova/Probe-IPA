import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../scss/sidemenu.scss";
import { restaurants } from "./../json/restaurants";
import { useHistory } from "react-router-dom";

const Sidemenu = () => {
	const history = useHistory();
	const [isExpanded, toggleIsExpanded] = useState();

	function redirect(r) {
		history.push(r);
	}

	function listAllNavOptions() {
		let restaurantList = [];
		let filteredRestaurants = [];
		if (restaurants)
			restaurants.filter(r => {
				if (r.visibility === 0) filteredRestaurants.push(r);
				return r.visibility === 0;
			});
		if (filteredRestaurants)
			filteredRestaurants.map(f =>
				restaurantList.push(
					<li key={f.id} onClick={() => redirect(f.route)}>
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
						className="sidemenu-toggler"
						onClick={() => {
							toggleIsExpanded(!isExpanded);
						}}
					></input>
				</label>
			</div>
			{isExpanded ? <ul>{listAllNavOptions()}</ul> : <div></div>}
		</div>
	);
};

export default Sidemenu;
