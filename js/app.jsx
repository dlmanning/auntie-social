import React from 'react';
import { TweetList } from './tweet-list.jsx';
import { tweetStore } from './stores';

export class App extends React.Component {
	constructor () {
		this.state = {
			data: []
		};
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
				<button onClick={this.reload} >Reload</button>
			</div>
		);
	}

	reload () {
		console.log(arguments);
	}
}
