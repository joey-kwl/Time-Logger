import React, {Component} from 'react';
import ApiCalendar from 'react-google-calendar-api';


class Login extends Component{
	constructor(props) {
        super(props);
		this.handleItemClick = this.handleItemClick.bind(this);
		this.state = {
			loggedIn: '',
			sign: ApiCalendar.sign
		}

		this.signUpdate = this.signUpdate.bind(this);
		ApiCalendar.onLoad(() => {
			ApiCalendar.listenSign(this.signUpdate);
		});
	}

	signUpdate(sign) {
		this.setState({
			sign
		})
	}

	handleItemClick(event, name) {
		if (name === 'sign-in') {
			ApiCalendar.handleAuthClick();
			localStorage.setItem('auth', true)
		} else if (name === 'sign-out') {
			ApiCalendar.handleSignoutClick();
			localStorage.setItem('auth', false)
		}
	}

	render() {
		let button;
		if (this.state.sign) {
			button = <button onClick={(e) => this.handleItemClick(e, 'sign-out')}> sign-out </button>
		} else {
			button = <button onClick={(e) => this.handleItemClick(e, 'sign-in')}> sign-in </button>;
		}
		return (
			<div>
				{button}
			</div>
		);
	}
}

export default Login
