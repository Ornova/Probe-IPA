import React from "react";
import "./../scss/customerview.scss";
import WeekDisplay from "./WeekDisplay";
import Sidemenu from "./Sidemenu";
import moment from "moment";

const CustomerView = props => {
	const momentNow = moment();
	const momentNow2 = moment(momentNow).add(7, "days");
	const dayOne = momentNow.day();

	return (
		<div className="view">
			<Sidemenu />
			<WeekDisplay dayOne={dayOne} date={momentNow} />
			<WeekDisplay dayOne={dayOne} date={momentNow2} />
		</div>
	);
};

export default CustomerView;
