var React = require('react');

import { TweetList } from './tweet-list.jsx';
import { tweetStore } from './stores';

export class App extends React.Component {
	constructor () {
		this.state = {
			data: []
		};

		tweetStore.on('update', () => {
			this.setState({
				data: tweetStore.timeline
			});
		});
	}

	render () {
		return <TweetList data={this.state.data} />
	}
}
