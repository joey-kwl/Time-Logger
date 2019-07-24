import React from 'react';
import ReactStopwatch from 'react-stopwatch';

const Stopwatch = () => (
	<ReactStopwatch
	  seconds={0}
	  minutes={0}
	  hours={0}
	  render={({ formatted }) => {
		return (
		  formatted
		);
	  }}
	 />
  );
   
  export default Stopwatch;
