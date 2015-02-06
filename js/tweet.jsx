var React = require('react');

export class Tweet extends React.Component {
	render () {
		return (
			<div>
				<h3>{this.props.user.name}</h3>
				<p>{this.props.text}</p>
			</div>
		);

	}
}
