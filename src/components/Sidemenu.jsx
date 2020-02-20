import React, { useState } from "react";
import "./../scss/sidemenu.scss";
import { restaurants } from "./../json/restaurants";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeMenu, toggleAdmin } from "./../redux/_actions/menu.actions";

const Sidemenu = () => {
	const history = useHistory();

	const dispatch = useDispatch();
	const menuStore = useSelector(state => state.menu);
	const [isExpanded, toggleIsExpanded] = useState();

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
			<input
				type="button"
				className="button is-rounded"
				onClick={() => {
					dispatch(toggleAdmin(!menuStore.isAdmin));
				}}
			/>
			{isExpanded && (
				<ul>
					{listAllNavOptions()}
					{menuStore.isAdmin && (
						<div>
							<input
								type="button"
								className="button is-rounded"
								onClick={() => history.push("/admin")}
								value="Admin"
							/>
							<input
								type="button"
								className="button is-rounded"
								onClick={() => history.push("/")}
								value="Cust"
							/>

							<input
								type="button"
								className="button is-rounded"
								onClick={() => history.push("/menulist")}
								value="List"
							/>
						</div>
					)}
				</ul>
			)}
		</div>
	);
};

export default Sidemenu;
