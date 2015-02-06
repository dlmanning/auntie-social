var React = require('react');

export class Tweet extends React.Component {
	render () {
		return <div>{this.props.text}</div>
	}
}
