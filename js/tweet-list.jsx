var React = require('react');

import { Tweet } from './tweet.jsx';

export class TweetList extends React.Component {
	render () {
		var tweetNodes = this.props.data.map(tweet => <Tweet text={tweet.text} />);

		return <div>{tweetNodes}</div>;
	}
}
