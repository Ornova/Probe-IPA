import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import WeekDisplay from "./WeekDisplay";
import Sidemenu from "./Sidemenu";
import "./../scss/view.scss";

const View = props => {
	const menuStore = useSelector(state => state.menu);
	// current date used as point zero to derive all over dates from if this should be wrong you will be sad
	const momentNow = moment();
	// gets number of days past this week
	const dayOne = momentNow.day();
	const amountOfWeeks = [1, 2];
	const amountOfWeeksAdmin = [1, 2, 3, 4];

	return (
		<section className="view">
			{/* Displays the Navigation Menu on the lefthand side of the Page */}
			<Sidemenu />
			{/*
				Displays the first week out of the 4 weeks,
				change Items only in case of an emergency
				or other critical situation
			*/}
			{menuStore.isAdmin
				? amountOfWeeksAdmin.map(weekNum => {
						const weekday = moment(momentNow).add((weekNum - 1) * 7, "days");
						return <WeekDisplay key={weekday} dayOne={dayOne} date={weekday} />;
				  })
				: amountOfWeeks.map(weekNum => {
						const weekday = moment(momentNow).add((weekNum - 1) * 7, "days");
						return <WeekDisplay key={weekday} dayOne={dayOne} date={weekday} />;
				  })}
		</section>
	);
};

export default View;
