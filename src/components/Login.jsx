import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./../scss/login.scss";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const user = { username: "user", password: "password" };

	let history = useHistory();

	function handleLogin() {
		localStorage.setItem("menu", "[{ day: { date: 21022020, menus: [{ id: 12 }] } }]");

		if (username === user.username && password === user.password) {
			history.push("/adminview");
		}

		console.log(localStorage.getItem("menu"));
	}

	return (
		<div className="login">
			<div>
				User:
				<input
					className="username-input"
					value={username}
					id="username"
					onChange={e => setUsername(e.currentTarget.value)}
				/>
			</div>
			<div>
				Password:
				<input
					className="password-input"
					value={password}
					id="password"
					onChange={e => setPassword(e.currentTarget.value)}
				/>
			</div>
			<input type="button" value="Login" onClick={e => handleLogin(e)} />
		</div>
	);
};

export default Login;
