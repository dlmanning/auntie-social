var React = require('react');

var styles = {
	borderBottom: '1px solid black'
};

export class Tweet extends React.Component {
	render () {
		return (
			<div style={styles}>
				<h3>{this.props.user.name}</h3>
				<p>{this.props.text}</p>
			</div>
		);

	}
}
