import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { configureStore } from "./redux/store";
import { Provider } from "react-redux";
import * as moment from "moment";
import "moment/locale/de-ch";
import Login from "./components/Login";
import Menulist from "./components/Menulist";
import View from "./components/View";
import { allItems, getItems } from "./json/menu";
import "./../node_modules/bulma/bulma.sass";

const store = configureStore();
moment.locale("de-ch");

const App = () => {
	if (!localStorage.getItem("menu")) {
		if (store) {
			localStorage.setItem("menu", JSON.stringify(allItems));
		} else {
			localStorage.setItem("menu", JSON.stringify(allItems));
		}
	}

	if (store) {
		getItems(store);
	}

	return (
		<Provider store={store}>
			<Router>
				<div>
					<Switch>
						<Route path="/login">
							<Login />
						</Route>
						<Route path="/menulist">
							<Menulist />
						</Route>
						<Route path="/">
							<View />
						</Route>
					</Switch>
				</div>
			</Router>
		</Provider>
	);
};

export default App;
