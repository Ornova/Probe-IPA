import React from "react";
import moment from "moment";
import WeekDisplay from "./WeekDisplay";
import Sidemenu from "./Sidemenu";
import "./../scss/adminview.scss";

const AdminView = props => {
	// currently selected Restaurant, there has to be one selected from the get go or the code could not work
	const selectedRestaurant = 1;
	// current date used as point zero to derive all over dates from if this should be wrong you will be sad
	const momentNow = moment();
	// dates used as to create other weeks
	const momentNow2 = moment(momentNow).add(7, "days");
	const momentNow3 = moment(momentNow).add(14, "days");
	const momentNow4 = moment(momentNow).add(21, "days");
	// gets number of days past this week
	const dayOne = momentNow.day();

	return (
		<section className="view">
			{/* Displays the Navigation Menu on the lefthand side of the Page */}
			<Sidemenu />
			{/*
				Displays the first week out of the 4 weeks,
				change Items only in case of an emergency
				or other critical situation
			*/}
			<WeekDisplay dayOne={dayOne} date={momentNow} selectedRestaurant={selectedRestaurant} />
			{/*
				Displays the second week out of the 4 weeks,
				change Items only in case of an emergency
				or other critical situation
			*/}
			<WeekDisplay
				dayOne={dayOne}
				date={momentNow2}
				selectedRestaurant={selectedRestaurant}
			/>
			{/*
				Displays the third week out of the 4 weeks,
				change Items to plan the menu displayed the next week, from now
			*/}
			<WeekDisplay
				dayOne={dayOne}
				date={momentNow3}
				selectedRestaurant={selectedRestaurant}
			/>
			{/*
				Displays the fourth week out of the 4 weeks,
				change Items to plan the menu displayed
			*/}
			<WeekDisplay
				dayOne={dayOne}
				date={momentNow4}
				selectedRestaurant={selectedRestaurant}
			/>
		</section>
	);
};

export default AdminView;
