import React, { Component } from 'react';
// import ApiCalendar from 'react-google-calendar-api'

import Login from './components/Login'
import Stop from './components/Stop'
import StartButton from './components/StartButton';

import StatusSign from './components/StatusSign'


class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			running: false,
			startTime: new Date(),
			sign: <StatusSign/>
		}
		this.trackingTime = this.trackingTime.bind(this)
		this.setType = this.setType.bind(this)

	}
	
	trackingTime(running) {
		this.setState({
			running: running
		})
	}

	setType(name) {
		this.setState({
			type: name,
			running: true
		});
	}

	render() {
		let stopButton;
		let start;
		
		if (this.state.sign) {
			
			if (this.state.running) {
				stopButton = <Stop startTime={this.state.startTime} type={this.state.type} click={this.trackingTime}/>
				start = '';
			} else {
				start = <div>
					<StartButton title="Working" setType={this.setType}/>
					<StartButton title="Sleeping" setType={this.setType}/>
					<StartButton title="Gaming" setType={this.setType}/>
					<StartButton title="Eating" setType={this.setType}/>
				</div>;
				stopButton = ''
			}
		}

		return(
			<div>
				<Login/>
				{stopButton}
				{start}
				{<StatusSign/>}
			</div>
		)
	}
}

export default App;
