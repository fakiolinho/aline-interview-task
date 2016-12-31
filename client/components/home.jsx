import React from 'react';

class Home extends React.Component {
	render() {
		let personalWelcomeMsg = null;
		if (this.props.isLoggedIn){
			personalWelcomeMsg = this.props.personalWelcomeMsg;
		}
		return (
			<div>
				<h1>Welcome Home</h1>
				{personalWelcomeMsg}
			</div>
		);
	}
}

export default Home;