var React = require('React');

export class Tweet extends React.Component {
	render () {
		return <div>{this.props.text}</div>
	}
}
