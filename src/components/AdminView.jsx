import React from "react";
import "./../scss/adminview.scss";
import WeekDisplay from "./WeekDisplay";
import Sidemenu from "./Sidemenu";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";

const AdminView = props => {
	const menuStore = useSelector(state => state.menu);
	const selectedRestaurant = 1;
	const momentNow = moment();
	const momentNow2 = moment(momentNow).add(7, "days");
	const momentNow3 = moment(momentNow).add(14, "days");
	const momentNow4 = moment(momentNow).add(21, "days");
	const dayOne = momentNow.day();

	return (
		<div className="view">
			<Sidemenu />
			<WeekDisplay dayOne={dayOne} date={momentNow} selectedRestaurant={selectedRestaurant} />
			<WeekDisplay
				dayOne={dayOne}
				date={momentNow2}
				selectedRestaurant={selectedRestaurant}
			/>
			<WeekDisplay
				dayOne={dayOne}
				date={momentNow3}
				selectedRestaurant={selectedRestaurant}
			/>
			<WeekDisplay
				dayOne={dayOne}
				date={momentNow4}
				selectedRestaurant={selectedRestaurant}
			/>
		</div>
	);
};

export default AdminView;
