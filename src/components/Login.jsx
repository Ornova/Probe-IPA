import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toggleAdmin } from "./../redux/_actions/menu.actions";
import "./../scss/login.scss";

const Login = () => {
	const menuStore = useSelector(state => state.menu.isAdmin);
	const dispatch = useDispatch();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const user = { username: "user", password: "password" };

	const history = useHistory();

	function handleLogin() {
		if (username === user.username && password === user.password) {
			dispatch(toggleAdmin(!menuStore));
			history.push("/admin");
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
			<input
				type="button"
				classname="button is-rounded"
				value="Login"
				onClick={e => handleLogin(e)}
			/>
		</div>
	);
};

export default Login;
