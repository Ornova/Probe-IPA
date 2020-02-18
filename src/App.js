import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { configureStore } from "./redux/store";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Menulist from "./components/Menulist";
import CustomerView from "./components/CustomerView";
import AdminView from "./components/AdminView";

const store = configureStore();

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<div>
					<Switch>
						<Route path="/login">
							<Login />
						</Route>
						<Route path="/adminview">
							<AdminView />
						</Route>
						<Route path="/menulist">
							<Menulist />
						</Route>
						<Route path="/cust">
							<CustomerView />
						</Route>
						<Route path="/">
							<nav>
								<ul>
									<li>
										<Link to="/">Home</Link>
									</li>
									<li>
										<Link to="/login">Login</Link>
									</li>
									<li>
										<Link to="/menulist">Menulist</Link>
									</li>
									<li>
										<Link to="/adminview">Adminview</Link>
									</li>
									<li>
										<Link to="/cust">CustomerView</Link>
									</li>
								</ul>
							</nav>
						</Route>
					</Switch>
				</div>
			</Router>
		</Provider>
	);
};

export default App;
