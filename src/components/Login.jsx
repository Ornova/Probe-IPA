import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import "./../scss/login.scss";

class Login extends Component {
	state = {
		username: "",
		password: "",
		redir: false,
		user: { username: "user", password: "password" }
	};
	history = useHistory();

	setValue = event => {
		this.setState({ [event.currentTarget.id]: event.currentTarget.value });
	};

	handleLogin = event => {
		event.preventDefault();
		if (
			this.state.username === this.state.user.username &&
			this.state.password === this.state.user.password
		) {
			this.history.push("/adminview");
		}
	};

	render = () => {
		return (
			<div className="login">
				<div>
					User:
					<input
						className="username-input"
						value={this.state.username}
						id="username"
						onChange={e => this.setValue(e)}
					/>
				</div>
				<div>
					Password:
					<input
						className="password-input"
						value={this.state.password}
						id="password"
						onChange={e => this.setValue(e)}
					/>
				</div>
				<input type="button" value="Login" onClick={e => this.handleLogin(e)} />
			</div>
		);
	};
}

export default Login;
