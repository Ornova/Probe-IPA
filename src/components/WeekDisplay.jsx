import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import Menuitem from "./Menuitem";
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
			<div>
				{moment(momentclone)
					.subtract(props.dayOne, "days")
					.add(1, "days")
					.format("ddd DD-MM-YYYY")}
				<DayDisplay
					selectedRestaurant={menuStore.selectedMenu}
					date={moment(momentclone)
						.subtract(props.dayOne, "days")
						.add(1, "days")}
					day={1}
					id={
						moment(momentclone)
							.subtract(props.dayOne, "days")
							.add(1, "days") + 1
					}
				/>
			</div>
			<div>
				{moment(momentclone)
					.subtract(props.dayOne, "days")
					.add(1, "days")
					.add(24, "hours")
					.format("ddd DD-MM-YYYY")}
				<DayDisplay
					selectedRestaurant={menuStore.selectedMenu}
					date={moment(momentclone)
						.subtract(props.dayOne, "days")
						.add(1, "days")
						.add(24, "hours")}
					day={2}
					id={
						moment(momentclone)
							.subtract(props.dayOne, "days")
							.add(1, "days") + 2
					}
				/>
			</div>
			<div>
				{moment(momentclone)
					.subtract(props.dayOne, "days")
					.add(1, "days")
					.add(48, "hours")
					.format("ddd DD-MM-YYYY")}
				<DayDisplay
					selectedRestaurant={menuStore.selectedMenu}
					date={moment(momentclone)
						.subtract(props.dayOne, "days")
						.add(1, "days")
						.add(48, "hours")}
					day={3}
					id={
						moment(momentclone)
							.subtract(props.dayOne, "days")
							.add(1, "days") + 3
					}
				/>
			</div>
			<div>
				{moment(momentclone)
					.subtract(props.dayOne, "days")
					.add(1, "days")
					.add(72, "hours")
					.format("ddd DD-MM-YYYY")}
				<DayDisplay
					selectedRestaurant={menuStore.selectedMenu}
					date={moment(momentclone)
						.subtract(props.dayOne, "days")
						.add(1, "days")
						.add(72, "hours")}
					day={4}
					id={
						moment(momentclone)
							.subtract(props.dayOne, "days")
							.add(1, "days") + 1
					}
				/>
			</div>
			<div>
				{moment(momentclone)
					.subtract(props.dayOne, "days")
					.add(1, "days")
					.add(96, "hours")
					.format("ddd DD-MM-YYYY")}
				<DayDisplay
					selectedRestaurant={menuStore.selectedMenu}
					date={moment(momentclone)
						.subtract(props.dayOne, "days")
						.add(1, "days")
						.add(96, "hours")}
					day={5}
					id={
						moment(momentclone)
							.subtract(props.dayOne, "days")
							.add(1, "days") + 1
					}
				/>
			</div>
			<div>
				Weekly Special
				<Menuitem />
			</div>
		</div>
	);
};

export default WeekDisplay;
