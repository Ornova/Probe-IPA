import React from "react";
import moment from "moment";
import WeekDisplay from "./WeekDisplay";
import Sidemenu from "./Sidemenu";
import "./../scss/customerview.scss";

const CustomerView = props => {
	// current date used as point zero to derive all over dates from if this should be wrong you will be sad
	const momentNow = moment();
	// dates used as to create other weeks
	const momentNow2 = moment(momentNow).add(7, "days");
	// gets number of days past this week
	const dayOne = momentNow.day();

	return (
		<div className="view">
			{/* Displays the Navigation Menu on the lefthand side of the Page */}
			<Sidemenu />
			{/* Displays the first week */}
			<WeekDisplay dayOne={dayOne} date={momentNow} />
			{/* Displays the second week */}
			<WeekDisplay dayOne={dayOne} date={momentNow2} />
		</div>
	);
};

export default CustomerView;
