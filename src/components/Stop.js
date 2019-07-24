import React, { PureComponent } from 'react';
import ApiCalendar from 'react-google-calendar-api';

class Stop extends PureComponent {
	constructor(props) {
		super(props)
		this.timeNow = new Date();
		this.saveToCalendar = this.saveToCalendar.bind(this);
		this.state = {
			type: ''
		}
	}
		
	saveToCalendar() {
		this.props.click(false)
		let summary;
		
		if (this.props.title) {
			summary = `${this.props.type} - ${this.props.title}`;
		} else {
			summary = this.props.type;
		}

		ApiCalendar.createEvent(
			{
				summary: summary,
				start: {
					dateTime: this.props.startTime,
				},
				end: {
					dateTime: this.timeNow
				}
				
			},
			ApiCalendar.calendar
		).then(result => {
			console.log(result)
		})
	}

	render() {
		return (
			<div className="stop">
				<button onClick={this.saveToCalendar}>Stop</button>
			</div>
		)
	}
}

export default Stop;
