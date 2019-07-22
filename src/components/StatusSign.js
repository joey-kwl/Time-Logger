import React, {Component} from 'react';
import ApiCalendar from 'react-google-calendar-api';

class StatusSign extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sign: ApiCalendar.sign,
		};

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
	
	render() {
		console.log(this.state.sign)
		return (
			<div>{this.state.sign}</div>
		);
	}
}

export default StatusSign
