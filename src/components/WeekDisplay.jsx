import React from "react";
import "./../scss/weekdisplay.scss";
import "./../scss/buttons.scss";
import DayDisplay from "./DayDisplay";
import Menuitem from "./Menuitem";
import moment from "moment";

const WeekDisplay = props => {
	const monday = moment()
		.subtract(props.dayOne, "days")
		.add(1, "days");

	return (
		<div className="weekdisplay">
			<div>
				{monday.format("ddd DD-MM-YYYY")}
				<DayDisplay
					selectedRestaurant={props.selectedRestaurant}
					date={monday}
					day={1}
					id={monday + 1}
				/>
			</div>
			<div>
				{monday.add(24, "hours").format("ddd DD-MM-YYYY")}
				<DayDisplay
					selectedRestaurant={props.selectedRestaurant}
					date={monday}
					day={2}
					id={monday + 2}
				/>
			</div>
			<div>
				{monday.add(24, "hours").format("ddd DD-MM-YYYY")}
				<DayDisplay
					selectedRestaurant={props.selectedRestaurant}
					date={monday}
					day={3}
					id={monday + 3}
				/>
			</div>
			<div>
				{monday.add(24, "hours").format("ddd DD-MM-YYYY")}
				<DayDisplay
					selectedRestaurant={props.selectedRestaurant}
					date={monday}
					day={4}
					id={monday + 1}
				/>
			</div>
			<div>
				{monday.add(24, "hours").format("ddd DD-MM-YYYY")}
				<DayDisplay
					selectedRestaurant={props.selectedRestaurant}
					date={monday}
					day={5}
					id={monday + 1}
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
