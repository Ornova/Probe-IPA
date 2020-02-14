import React, { useState } from "react";
import "./../scss/weekdisplay.scss";
import "./../scss/buttons.scss";
import DayDisplay from "./DayDisplay";
import Menuitem from "./Menuitem";
//import { useHistory } from "react-router-dom";

const WeekDisplay = props => {
	//const history = useHistory();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
	const [dates, setDates] = useState([]);
	const date = props.date;

	//Todo Week change
	function handleButtonClick() {}

	return (
		<div className="weekdisplay">
			<div>
				{props.dayOne + "." + (date.getMonth() + 1) + "." + date.getFullYear()}
				<DayDisplay
					date={props.dayOne + "." + (date.getMonth() + 1) + "." + date.getFullYear()}
					day={0}
				/>
				<input
					type="button"
					onClick={() => handleButtonClick()}
					value="+"
					className="add-button"
				/>
			</div>
			<div>
				{props.dayOne + 1 + "." + (date.getMonth() + 1) + "." + date.getFullYear()}
				<DayDisplay
					date={props.dayOne + 1 + "." + (date.getMonth() + 1) + "." + date.getFullYear()}
					day={1}
				/>
				<input
					type="button"
					onClick={() => handleButtonClick()}
					value="+"
					className="add-button"
				/>
			</div>
			<div>
				{props.dayOne + 2 + "." + (date.getMonth() + 1) + "." + date.getFullYear()}
				<DayDisplay
					date={props.dayOne + 2 + "." + (date.getMonth() + 1) + "." + date.getFullYear()}
					day={2}
				/>
				<input
					type="button"
					onClick={() => handleButtonClick()}
					value="+"
					className="add-button"
				/>
			</div>
			<div>
				{props.dayOne + 3 + "." + (date.getMonth() + 1) + "." + date.getFullYear()}
				<DayDisplay
					date={props.dayOne + 3 + "." + (date.getMonth() + 1) + "." + date.getFullYear()}
					day={3}
				/>
				<input
					type="button"
					onClick={() => handleButtonClick()}
					value="+"
					className="add-button"
				/>
			</div>
			<div>
				{props.dayOne + 4 + "." + (date.getMonth() + 1) + "." + date.getFullYear()}
				<DayDisplay
					date={props.dayOne + 4 + "." + (date.getMonth() + 1) + "." + date.getFullYear()}
					day={4}
				/>
				<input
					type="button"
					onClick={() => handleButtonClick()}
					value="+"
					className="add-button"
				/>
			</div>
			<div>
				{props.dayOne + 5 + "." + (date.getMonth() + 1) + "." + date.getFullYear()}
				<DayDisplay
					date={props.dayOne + 5 + "." + (date.getMonth() + 1) + "." + date.getFullYear()}
					day={5}
				/>
				<input
					type="button"
					onClick={() => handleButtonClick()}
					value="+"
					className="add-button"
				/>
			</div>
			<div>
				{props.dayOne + 6 + "." + (date.getMonth() + 1) + "." + date.getFullYear()}
				<DayDisplay
					date={props.dayOne + 6 + "." + (date.getMonth() + 1) + "." + date.getFullYear()}
					day={6}
				/>
				<input
					type="button"
					onClick={() => handleButtonClick()}
					value="+"
					className="add-button"
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
