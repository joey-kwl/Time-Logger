import React, { Component } from 'react';
import ApiCalendar from 'react-google-calendar-api'

import Auth from './components/Auth'
import Stop from './components/Stop'
import StartButton from './components/StartButton';
import Stopwatch from './components/Stopwatch';

import './App.css';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			running: false,
			startTime: '',
			useStopwatch: true,
		}

		this.setRunning = this.setRunning.bind(this)
		this.setType = this.setType.bind(this)

		this.signUpdate = this.signUpdate.bind(this);
		ApiCalendar.onLoad(() => {
			this.signUpdate(ApiCalendar.sign);
			ApiCalendar.listenSign(this.signUpdate);
		});
	}

	signUpdate(sign) {
		this.setState({
			sign: sign
		})
	}
	
	setRunning(running) {
		this.setState({
			running: running
		})
	}

	setType(name) {
		this.setState({
			type: name,
			running: true,
			startTime: new Date()
		});
	}

	render() {
		let stopButton;
		let start;
		let stopwatch = '00:00:00';
		
		if (this.state.sign) {
			
			if (this.state.running) {
				stopButton = <Stop startTime={this.state.startTime} type={this.state.type} click={this.setRunning}/>
				start = '';
				
				if (this.state.useStopwatch) {
					stopwatch = <Stopwatch/>
				} else {
					stopwatch = 'Running without stopwatch'
				}
			} else {
				start = <div className="buttons">
					<div className="button-group">
						<StartButton title="Work" setType={this.setType}/>
						<StartButton title="Sleep" setType={this.setType}/>
						<StartButton title="Movie" setType={this.setType}/>
					</div>

					<div className="button-group">
						<StartButton title="Game" setType={this.setType}/>
						<StartButton title="Eat" setType={this.setType}/>
						<StartButton title="Music" setType={this.setType}/>
					</div>
				</div>;
				stopButton = ''
			}
		}

		return(
			<div className="app">
				<Auth sign={this.state.sign}/>
				<div className="stopwatch">
					{stopwatch}
				</div>
				{start}
				{stopButton}
			</div>
		)
	}
}

export default App;

// class StatusSign extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			sign: ApiCalendar.sign,
// 		};

// 		this.signUpdate = this.signUpdate.bind(this);
// 		ApiCalendar.onLoad(() => {
// 			this.setState({
// 				sign: ApiCalendar.sign
// 			});

// 			ApiCalendar.listenSign(this.signUpdate);
// 		});
// 	}

// 	signUpdate(sign) {
// 		this.setState({
// 			sign
// 		})
// 	}
	
// 	render() {
// 		console.log(this.state.sign.toString())
// 		const a = this.state.sign.toString()
// 		return (
// 			<div>{a}</div>
// 		);
// 	}
// }
