import React, { useState, useRef } from "react";
import useOutsideClick from "./useOutsideClick";
import "./../scss/sidemenu.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { restaurants } from "./../json/restaurants";
import { changeMenu } from "./../redux/_actions/menu.actions";
import { toggleAdmin } from "./../redux/_actions/menu.actions";

const Sidemenu = () => {
	// hooks
	const isAdmin = useSelector(state => state.menu.isAdmin);
	const dispatch = useDispatch();
	const history = useHistory();
	const ref = useRef();

	// is sidemenu expanded
	const [isExpanded, toggleIsExpanded] = useState();

	useOutsideClick(ref, () => {
		if (isExpanded) {
			toggleIsExpanded(!isExpanded);
		}
	});

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
						className="list-item"
						key={f.id}
						onClick={() => {
							dispatch(changeMenu(f.statevalue));
							isAdmin ? history.push("/admin") : history.push("/");
						}}
					>
						{f.name}
					</li>
				)
			);

		return restaurantList.map(r => r);
	}

	return (
		<section className={!isExpanded ? "sidemenu" : "expanded-sidemenu"} ref={ref}>
			<div className="sidemenu-button">
				<label htmlFor="sidemenu-toggler">
					<button
						type="submit"
						className="button is-rounded sidemenu-toggler"
						onClick={event => {
							event.preventDefault();
							toggleIsExpanded(!isExpanded);
						}}
					>
						<FontAwesomeIcon icon={faBars} />
					</button>
				</label>
			</div>
			{/* if sidemenu is expanded */}
			{isExpanded && (
				<div className="expanded-list">
					<ul className="list ">
						{listAllNavOptions()}
						{isAdmin && (
							<li
								className="list-item"
								key="menuitemlist"
								onClick={() => {
									history.push("/menulist");
								}}
							>
								Menulist
							</li>
						)}
					</ul>
					<button
						className="button"
						onClick={() => {
							dispatch(toggleAdmin(!isAdmin));
						}}
					>
						toggleAdmin
					</button>
					{isAdmin ? (
						<>
							<button
								className="button"
								onClick={() => {
									history.push("/");
								}}
							>
								CustomerView
							</button>
							<button
								className="button login-out"
								onClick={() => {
									dispatch(toggleAdmin(false));
								}}
							>
								Log out
							</button>
						</>
					) : (
						<button
							className="button login-out"
							onClick={() => {
								history.push("/login");
							}}
						>
							Log In
						</button>
					)}
				</div>
			)}
		</section>
	);
};

export default Sidemenu;
