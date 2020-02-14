import React, { useState } from "react";
import "./../scss/customerview.scss";
import WeekDisplay from "./WeekDisplay";
import Sidemenu from "./Sidemenu";
//import { useHistory } from "react-router-dom";

const CustomerView = props => {
	const [selectedRestaurant, setSelectedRestaurant] = useState(1);
	const [date, setDate] = useState(new Date());
	const [dayOne, setDayOne] = useState(date.getDate() - date.getDay());
	//const history = useHistory();

	return (
		<div className="view">
			<Sidemenu />
			<WeekDisplay dayOne={dayOne} date={date} />
		</div>
	);
};

export default CustomerView;
