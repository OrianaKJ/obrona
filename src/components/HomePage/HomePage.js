import React, {Component} from 'react';
import {CardList} from '../CardList/CardList';
import {SearchBox} from '../SearchBox/SearchBox';
import {HeroImage} from '../HeroImage/HeroImage';
import { Footer } from '../Footer/Footer'

class HomePage extends Component {
    constructor() {
      super();
      this.state = {
        movies: [],
        searchField: ''
      }
  
    }
  
    componentDidMount() {
      fetch('https://api.themoviedb.org/3/tv/popular?api_key=284b6c29bdbbc5b45a7d60b8e41050e6&language=pl-PL')
      .then(response => response.json())
      .then(data => this.setState({movies : data.results}))
    }
  
  
    handleChange = (e) => {
      this.setState({searchField: e.target.value.toLowerCase()})
    }
  
    render() {
      const { movies, searchField } = this.state; 
      const filteredMovies = movies.filter(movie => movie.name.toLowerCase().includes(searchField))
     
      return (
        <div className="app">
        <HeroImage />
        <SearchBox 
          placeholder="Wyszukaj film"
          handleChange={this.handleChange} 
        />
        <CardList movies={filteredMovies}/>      
        <Footer />
        </div>
      );
    }
  }
  
  export default HomePage;