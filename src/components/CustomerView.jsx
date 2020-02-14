import React, { useState } from "react";
import "./../scss/weekdisplay.scss";
import WeekDisplay from "./WeekDisplay";
//import { useHistory } from "react-router-dom";

const CustomerView = props => {
	const [date, setDate] = useState(new Date());
	const [dayOne, setDayOne] = useState(date.getDate() - date.getDay());
	//const history = useHistory();
	const firstDayOfThisWeek = "";

	return (
		<div className="view">
			<div>
				<WeekDisplay dayOne={dayOne + "." + date.getMonth() + "." + date.getFullYear()} />
			</div>
		</div>
	);
};

export default CustomerView;
