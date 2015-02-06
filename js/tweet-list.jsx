import React from 'react';
import { Tweet } from './tweet.jsx';

export class TweetList extends React.Component {
	render () {
		var tweetNodes = this.props.data.map( tweet =>
			<Tweet key={tweet.id} user={tweet.user} text={tweet.text} />
		);

		return <div>{tweetNodes}</div>;
	}
}
