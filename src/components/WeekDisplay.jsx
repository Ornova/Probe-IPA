import React from "react";
import "./../scss/weekdisplay.scss";
import "./../scss/buttons.scss";
import DayDisplay from "./DayDisplay";
import Menuitem from "./Menuitem";
import moment from "moment";
import { useSelector } from "react-redux";

const WeekDisplay = props => {
	const momentclone = props.date;
	const menuStore = useSelector(state => state.menu);

	return (
		<div className="weekdisplay">
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
