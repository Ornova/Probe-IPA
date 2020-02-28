import React from "react";
import cn from "classnames";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { toggleAdmin } from "./../redux/_actions/menu.actions";

import "./../scss/login.scss";

const Login = () => {
	// hooks
	const menuStore = useSelector(state => state.menu.isAdmin);
	const dispatch = useDispatch();
	const history = useHistory();

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [logginFailureReason, setLogginFailureReason] = useState({
		username: { value: true, reason: "" },
		password: { value: true, reason: "" }
	});

	// the default user with dummydata to simulate the login process
	const user = { username: "user", password: "password" };

	// thests the login-fields if they are corresponding with the user
	function handleLogin(event) {
		event.preventDefault();
		let loggin = {
			username: { value: true, reason: "" },
			password: { value: true, reason: "" }
		};
		if (3 < username.length && username.length < 33) {
			loggin = {
				username: {
					value: true,
					reason: ""
				},
				password: loggin.password
			};
		} else {
			loggin = {
				username: {
					value: false,
					reason: "Username must be at least 4 and at most 32 characters long"
				},
				password: loggin.password
			};
		}
		if (7 < password.length) {
			loggin = { username: loggin.username, password: { value: true, reason: "" } };
		} else {
			loggin = {
				username: loggin.username,
				password: {
					value: false,
					reason: "Password must be at least 8 characters long"
				}
			};
		}
		if (loggin.username.value && loggin.password.value) {
			if (username === user.username && password === user.password) {
				console.log("B");
				dispatch(toggleAdmin(!menuStore));
				history.push("/admin");
				setLogginFailureReason(loggin);
			} else {
				setLogginFailureReason({
					username: { value: false, reason: "" },
					password: { value: false, reason: "Username and Password do not match" }
				});
			}
		} else {
			setLogginFailureReason(loggin);
		}
	}

	return (
		<section className="container">
			<form className="login has-text-centered">
				<div className="field">
					<p className="control has-icons-left">
						<input
							className={cn("input is-rounded", {
								"is-danger": !logginFailureReason.username.value
							})}
							type="text"
							placeholder="Username"
							id="username"
							value={username}
							onChange={e => setUsername(e.currentTarget.value)}
						/>
						<span className="icon is-left">
							<i className="fas fa-envelope"></i>
						</span>
					</p>
					<div className="is-size-7 has-text-right has-text-danger">
						{!logginFailureReason.username.value
							? logginFailureReason.username.reason
							: null}
					</div>
				</div>
				<div className="field">
					<p className="control has-icons-left">
						<input
							className={cn("input is-rounded", {
								"is-danger": !logginFailureReason.password.value
							})}
							type="password"
							placeholder="Password"
							value={password}
							id="password"
							onChange={e => setPassword(e.currentTarget.value)}
						/>
						<span className="icon is-left">
							<i className="fas fa-lock"></i>
						</span>
					</p>
					<div className="is-size-7 has-text-right has-text-danger">
						{!logginFailureReason.password.value
							? logginFailureReason.password.reason
							: null}
					</div>
				</div>
				<div className="field">
					<p className="control">
						<button
							type="submit"
							className="button is-rounded is-success is-pulled-right"
							onClick={e => handleLogin(e)}
						>
							Sign in
						</button>
					</p>
				</div>
			</form>
		</section>
	);
};

export default Login;
