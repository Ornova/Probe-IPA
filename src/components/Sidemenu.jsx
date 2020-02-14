import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../scss/sidemenu.scss";
import { useHistory } from "react-router-dom";

const Sidemenu = () => {
	const history = useHistory();
	const [isExpanded, toggleIsExpanded] = useState();

	function redirect(r) {
		history.push(r);
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
			{isExpanded ? (
				<ul>
					<li onClick={() => redirect("/")}>Restaurant 1</li>
					<li onClick={() => redirect("menu")}>Restaurant 2</li>
					<li onClick={() => redirect("test")}>Restaurant 3</li>
				</ul>
			) : (
				<div></div>
			)}
		</div>
	);
};

export default Sidemenu;
