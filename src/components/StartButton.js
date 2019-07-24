import React, { Component } from 'react';

class StartButton extends Component {
	constructor(props) {
		super(props);
		this.setType = this.setType.bind(this);
	}

	setType() {
		this.props.setType(this.props.title);
	}

	render() {
		return(
			<div className="button">
				<button
				className="start-button" 
				onClick={this.setType}>{this.props.title}</button>
			</div>
		)
	}
}

export default StartButton;
