import React, {Component} from 'react';
import ApiCalendar from 'react-google-calendar-api';

class Login extends Component{
	constructor(props) {
        super(props);
		this.handleItemClick = this.handleItemClick.bind(this);
		this.state = {
			sign: ApiCalendar.sign
		}

	}

	handleItemClick(event, name) {
		if (name === 'sign-in') {
			ApiCalendar.handleAuthClick();
		} else if (name === 'sign-out') {
			ApiCalendar.handleSignoutClick();
		}
	}

	render() {
		let button;
		
		if (this.props.sign) {
			button = <button className="auth-button logout" onClick={(e) => this.handleItemClick(e, 'sign-out')}> Logout </button>
		} else {
			button = <button className="auth-button login" onClick={(e) => this.handleItemClick(e, 'sign-in')}> Login </button>;
		}
		return (
			<div className="auth">
				{button}
			</div>
		);
	}
}

export default Login
