import React from "react";
import "./../scss/daydisplay.scss";
import Menuitem from "./Menuitem";
//import { useHistory } from "react-router-dom";

const DayDislay = props => {
	//const history = useHistory();

	return (
		<div className="dayDisplay">
			<div>
				{props.date}
				<Menuitem />
			</div>
		</div>
	);
};

export default DayDislay;
