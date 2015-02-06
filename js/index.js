import { tweetDispatcher } from './dispatchers';
import { App } from './app.jsx';

import React from 'react';
import Twitter from 'twitter';

var client = new Twitter({
	consumer_key: 'Sbk1GvLUSNjgwK1XiRKlbXNZQ',
	consumer_secret: '9toJzceiHDViNzzDB5jG8o4YA8rkWBLYpGPKM6UgA66qdfjexy',
	access_token_key: '310674727-FKNEpHegBwBVTdSMp3nPUz98oNVxzuYKp1JggVtz',
	access_token_secret: 'nFGu6cVqNw2Iwwu4yOhpEVh85zLq3iHPHv4XS8lvXN8iv'
});

var params = {screen_name: 'davidlymanning'};

client.get('statuses/user_timeline', params, function(error, tweets, response){
	if (!error) {
		tweetDispatcher.dispatch({
			actionType: 'timeline-update',
			timeline: tweets
		});
	}
});

React.render(React.createElement(App), document.getElementById('app'));
