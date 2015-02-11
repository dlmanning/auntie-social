import React from 'react';
import { RouteHandler } from 'react-router';

var styles = {
	background: '#DDD'
};

export class App extends React.Component {

	render () {
		return (
			<div style={styles}>
				<RouteHandler/>
			</div>
		);
	}

}
