
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	state = {
		data: []
	};

	componentDidMount() {
		this.fetchData()
			.then(res => this.setState(res))
			.catch(err => console.log(err));
	}

	fetchData = async () => {
		const response = await fetch('/mock');
		const body = response.json();

		return body;
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1>Data from the Backend</h1>
					{this.state.data.map(person => (
						<p key={person.id}>
							Name: {person.name} <br /> Age: {person.age}
						</p>
					))}
				</header>
			</div>
		);
	}
}

export default App;

