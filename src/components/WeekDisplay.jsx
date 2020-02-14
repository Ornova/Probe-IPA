import React, { useState } from "react";
import "./../scss/weekdisplay.scss";
import DayDisplay from "./DayDisplay";
//import { useHistory } from "react-router-dom";

const WeekDisplay = props => {
	//const history = useHistory();
	const [dates, setDates] = useState([]);

	return (
		<div className="weekDisplay">
			<div>
				<DayDisplay date={props.dayOne} day={0} />
				<DayDisplay date={props.dayOne + 1} day={1} />
				<DayDisplay date={props.dayOne + 2} day={2} />
				<DayDisplay date={props.dayOne + 3} day={3} />
				<DayDisplay date={props.dayOne + 4} day={4} />
				<DayDisplay date={props.dayOne + 5} day={5} />
				<DayDisplay date={props.dayOne + 6} day={6} />
			</div>
		</div>
	);
};

export default WeekDisplay;
