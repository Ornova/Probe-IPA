import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Sidemenu from "./components/Sidemenu";
import Menulist from "./components/Menulist";
import DayDisplay from "./components/DayDisplay";
import CustomerView from "./components/CustomerView";

const App = () => {
	return (
		<Router>
			<div>
				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/adminview"></Route>
					<Route path="/menu" /*Menuitemlist*/>
						<Sidemenu />
					</Route>
					<Route path="/test">
						<Menulist />
					</Route>
					<Route path="/daydisplay">
						<DayDisplay />
					</Route>
					<Route path="/cust">
						<CustomerView />
					</Route>
					<Route path="/" /*CustomerView*/>
						<nav>
							<ul>
								<li>
									<Link to="/">Home</Link>
								</li>
								<li>
									<Link to="/login">Login</Link>
								</li>
								<li>
									<Link to="/adminview">Adminview</Link>
								</li>
								<li>
									<Link to="/menu">Menu</Link>
								</li>
								<li>
									<Link to="/test">Test</Link>
								</li>
								<li>
									<Link to="/daydisplay">Day Display</Link>
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
	);
};

export default App;
