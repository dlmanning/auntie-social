import { App } from './app.jsx';
import { TimeLine } from './timeline.jsx';

import React from 'react';
import { Route, DefaultRoute } from 'react-router';

export let routes = (
	<Route name="app" path="/" handler={App}>
		<DefaultRoute handler={TimeLine}/>
	</Route>
);
