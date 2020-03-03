import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
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

	return (
		<div className="weekdisplay is-rounded">
			<DayDisplay
				name={moment(momentclone)
					.subtract(props.dayOne, "days")
					.add(1, "days") // 1 day
					.format("ddd DD.MM.YYYY")}
				selectedRestaurant={menuStore.selectedMenu}
				date={
					moment(momentclone)
						.subtract(props.dayOne, "days")
						.add(1, "days") // 1 day
				}
				day={1}
				id={
					moment(momentclone)
						.subtract(props.dayOne, "days")
						.add(1, "days") + 1
				}
			/>
			<DayDisplay
				name={moment(momentclone)
					.subtract(props.dayOne, "days")
					.add(1, "days") // 1 day
					.add(24, "hours") // 1 day
					.format("ddd DD.MM.YYYY")}
				selectedRestaurant={menuStore.selectedMenu}
				date={
					moment(momentclone)
						.subtract(props.dayOne, "days")
						.add(1, "days") // 1 day
						.add(24, "hours") // 1 day
				}
				day={2}
				id={
					moment(momentclone)
						.subtract(props.dayOne, "days")
						.add(1, "days") + 2
				}
			/>
			<DayDisplay
				name={moment(momentclone)
					.subtract(props.dayOne, "days")
					.add(1, "days") // 1 day
					.add(48, "hours") // 2 days
					.format("ddd DD.MM.YYYY")}
				selectedRestaurant={menuStore.selectedMenu}
				date={
					moment(momentclone)
						.subtract(props.dayOne, "days")
						.add(1, "days") // 1 day
						.add(48, "hours") // 2 days
				}
				day={3}
				id={
					moment(momentclone)
						.subtract(props.dayOne, "days")
						.add(1, "days") + 3
				}
			/>
			<DayDisplay
				name={moment(momentclone)
					.subtract(props.dayOne, "days")
					.add(1, "days") // 1 day
					.add(72, "hours") // 3 days
					.format("ddd DD.MM.YYYY")}
				selectedRestaurant={menuStore.selectedMenu}
				date={
					moment(momentclone)
						.subtract(props.dayOne, "days")
						.add(1, "days") // 1 day
						.add(72, "hours") // 3 days
				}
				day={4}
				id={
					moment(momentclone)
						.subtract(props.dayOne, "days")
						.add(1, "days") + 1
				}
			/>
			<DayDisplay
				name={moment(momentclone)
					.subtract(props.dayOne, "days")
					.add(1, "days") // 1 day
					.add(96, "hours") // 4 days
					.format("ddd DD.MM.YYYY")}
				selectedRestaurant={menuStore.selectedMenu}
				date={
					moment(momentclone)
						.subtract(props.dayOne, "days")
						.add(1, "days") // 1 day
						.add(96, "hours") // 4 days
				}
				day={5}
				id={
					moment(momentclone)
						.subtract(props.dayOne, "days")
						.add(1, "days") + 1
				}
			/>
			<DayDisplay
				name="Weekly Special"
				selectedRestaurant={menuStore.selectedMenu}
				date={
					moment(momentclone)
						.subtract(props.dayOne, "days")
						.add(1, "days") // 1 day
						.add(144, "hours") // 4 days
				}
				id="weeklySpecial"
			/>
		</div>
	);
};

export default WeekDisplay;
