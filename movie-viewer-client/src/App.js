
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(props) {
    super(props);
 
    this.state = {
      movie: [],
    };
  }

	componentDidMount() {
		fetch('/mock/Sandlot')
      .then(response => response.json())
			.then(data => this.setState({movie : data}))
			.catch(err => console.log(err));
	}


	render() {
    const  { movie } = this.state;
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1>Whats That Movie?</h1>
              {movie.map(m => 
              <p>
                Title : {m.title}  <br /> Poster: {m.image} <br /> Release: {m.release}
              </p>
                )}
				</header>
			</div>
		);
	}
}

export default App;

