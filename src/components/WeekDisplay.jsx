import React from "react";
import { useSelector } from "react-redux";
import * as moment from "moment";
import DayDisplay from "./DayDisplay";
import "./../scss/buttons.scss";
import "./../scss/weekdisplay.scss";

/**
 * Displays all different days in each Week, and the weekly special
 * @param {Object} props
 */
const WeekDisplay = props => {
	const menuStore = useSelector(state => state.menu);

	const momentclone = props.date;

	const weekdays = 5;

	let week = [];

	for (let x = 0; x < weekdays; x++) {
		const date = moment(momentclone)
			.subtract(props.dayOne, "days")
			.startOf("day")
			.add(1, "hour")
			.add(1, "days") // 1 day
			.add(x, "days"); // 1 day
		week.push({
			name: date.format("ddd DD.MM.YYYY"),
			selectedRestaurant: menuStore.selectedMenu,
			date: date.format("DD.MM.YYYY"),
			day: x
		});
	}

	return (
		<div className="weekdisplay is-rounded">
			{week.map(day => {
				return (
					<DayDisplay
						key={day.date}
						name={day.name}
						selectedRestaurant={day.selectedRestaurant}
						date={day.date}
						day={day.dayNum}
					/>
				);
			})}
			<DayDisplay
				id="weeklySpecial"
				name="Weekly Special"
				selectedRestaurant={menuStore.selectedMenu}
				date={moment(momentclone)
					.subtract(props.dayOne, "days")
					.startOf("day")
					.add(1, "hour")
					.add(1, "days") // 1 day
					.add(144, "hours") // 4 days
					.format("DD.MM.YYYY")}
			/>
		</div>
	);
};

export default WeekDisplay;
