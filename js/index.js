import React from 'react';
import Router from 'react-router';
import Twitter from 'twitter';

import twitterConfig from '../config.json';
import { routes } from './router.jsx';
import { tweetDispatcher } from './dispatchers';

var client = new Twitter(twitterConfig);

var params = {
	screen_name: 'davidlymanning',
	count: 50
};

// client.get('statuses/home_timeline', params, function(error, tweets, response){
// 	if (!error) {
// 		tweetDispatcher.dispatch({
// 			actionType: 'timeline-update',
// 			timeline: tweets
// 		});
// 	} else {
// 		console.error(error);
// 	}
// });

Router.run(routes, function (Handler) {
	React.render(<Handler/>, document.getElementById('app'));
});
