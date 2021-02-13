
import React, { Component } from 'react';
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
					<h1>Whats That Movie?</h1>
              {movie.map(m => 
              <p>
                Title : {m.title} <br /> 
                Release: {m.release}<br/>
                <img src={'https://image.tmdb.org/t/p/w500/'+ m.image} />
              </p>
                )}
				</header>
			</div>
		);
	}
}

export default App;

