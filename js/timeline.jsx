import { TweetList } from './tweet-list.jsx';
import { tweetStore } from './stores';

import React from 'react';

export class TimeLine extends React.Component {
	constructor () {
		this.state = {
			data: []
		};

		super();
	}

	componentDidMount () {
		tweetStore.on('update', () => {
			this.setState({
				data: tweetStore.timeline
			});
		});
	}

	render () {
		return (
			<div>
				<h2>Timeline</h2>
				<TweetList data={this.state.data} />
			</div>
		);
	}

}
