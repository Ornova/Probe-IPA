import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./redux/store";
import Login from "./components/Login";
import Menulist from "./components/Menulist";
import AdminView from "./components/AdminView";
import CustomerView from "./components/CustomerView";
import "./App.css";
import "bulma";
import { allItems, writeToLocal, getFromLocal } from "./json/menu";

const store = configureStore();

const App = () => {
	if (!localStorage.getItem("menu")) {
		if (store) {
			localStorage.setItem("menu", JSON.stringify(allItems));
		} else {
			localStorage.setItem("menu", JSON.stringify(allItems));
		}
	}

	getFromLocal(store);

	return (
		<Provider store={store}>
			<Router>
				<div>
					<Switch>
						<Route path="/login">
							<Login />
						</Route>
						<Route path="/admin">
							<AdminView />
						</Route>
						<Route path="/menulist">
							<Menulist />
						</Route>
						<Route path="/">
							<CustomerView />
						</Route>
					</Switch>
				</div>
			</Router>
		</Provider>
	);
};

export default App;
