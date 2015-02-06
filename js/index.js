import { tweetDispatcher } from './dispatchers';
import { App } from './app.jsx';

import React from 'react';
import Twitter from 'twitter';
import twitterConfig from '../config.json';

var client = new Twitter(twitterConfig);

var params = {screen_name: 'davidlymanning'};

client.get('statuses/user_timeline', params, function(error, tweets, response){
	if (!error) {
		tweetDispatcher.dispatch({
			actionType: 'timeline-update',
			timeline: tweets
		});
	} else {
		console.error(error);
	}
});

React.render(React.createElement(App), document.getElementById('app'));
