
import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor(props) {
    super(props);
 
    this.state = {
      movie: [],
      query: "",
      image : 'https://image.tmdb.org/t/p/w500/'
    };
  }

  onChange = e => {
    const {value} = e.target;
      this.setState({
        query: value
      });    
    this.search(value);
  };

  search = query => {
    const address = '/movie/'+ query;
    fetch(address)
    .then(response => response.json())
		.then(data => this.setState({
      movie : data
    }))
		.catch(err => console.log(err));
  }

	componentDidMount() {
		this.search("");
	}


	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h3>Whats That Movie?</h3>
        </header>
        <div>
        <form>
          <input type ="text" className="searchBox" onChange= {this.onChange} placeholder = "Search">
          </input>
				</form>
        </div>
        <div>
          <h2>{this.display()}</h2>
        </div>
			</div>
		);
	}

  display(){
    const movie = this.state.movie;
    if(movie.length > 0){
      return(
        <div lassName="App">
          {this.state.movie.map(m => 
              <p>
              Title : {m.title} <br /> 
              Release Date: {m.release}<br/>
              <img src={this.state.image + m.image} />
              </p>
            )}
        </div>
      )
    }
    else {
      return(
        <div className="App">
          <p>Search for movie here</p>
        </div>
      )
    }
    
  }
}

export default App;

