import React, { Component } from 'react';

class App extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount(){
	}

	componentWillUnmount() {
	}

	render() {
		return(
			<div>
				Welcome to the React-Hot-Dev-Starter-Kit {this.props.text}
			</div>
		);
	}
}

export default App;