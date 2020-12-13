import React from 'react';
import CardList from '../CardList/CardList';
import SearchBox from '../SearchBox/SearchBox';
import {HeroImage} from '../HeroImage/HeroImage';
import { Footer } from '../Footer/Footer'
import Spinner from '../Spinner/Spinner';
import LoadMoreBtn from '../LoadMore/LoadMore';

class HomePage extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        currentUser: this.props.currentUser,
        movies: [],
        searchField: '',
        loading: false,
        currentPage: 0,
        totalPages: 0,
      }
    }
  
    componentDidMount() {
      fetch('https://api.themoviedb.org/3/tv/popular?api_key=284b6c29bdbbc5b45a7d60b8e41050e6&language=pl-PL&page=1')
      .then(response => response.json())
      .then(data => {
        this.setState({movies : data.results});
      })
    }
  
  
    // handleChange = (e) => {
    //   this.setState({searchField: e.target.value.toLowerCase()})
    // }
    searchItems = (searchField) => {
      let endpoint = '';
      this.setState({
        movies: [],
        loading: true,
        searchField
      })
  
      if (searchField === "") {
        endpoint = `https://api.themoviedb.org/3/tv/popular?api_key=284b6c29bdbbc5b45a7d60b8e41050e6&language=pl-PL`;
      } else {
        endpoint = `https://api.themoviedb.org/3/search/tv?api_key=284b6c29bdbbc5b45a7d60b8e41050e6&language=pl-PL&query=${searchField}`;
      }
      this.fetchItems(endpoint);
    }
    loadMoreItems = () => {
      // ES6 Destructuring the state
      const { searchField, currentPage } = this.state;
  
      let endpoint = '';
      this.setState({ loading: true })
  
      if (searchField === '') {
        endpoint = `https://api.themoviedb.org/3/tv/popular?api_key=284b6c29bdbbc5b45a7d60b8e41050e6&language=pl-PL&page=${currentPage + 1}`;
      } else {
        endpoint = `https://api.themoviedb.org/3/search/tv?api_key=284b6c29bdbbc5b45a7d60b8e41050e6&language=pl-PL&query=${searchField}&page=${currentPage +1}`;
      }
      this.fetchItems(endpoint);
    }

    fetchItems = (endpoint) => {
      // ES6 Destructuring the state
      const { movies, searchField } = this.state;
  
      fetch(endpoint)
      .then(result => result.json())
      .then(result => {
        this.setState({
          movies: [...movies, ...result.results],
          loading: false,
          currentPage: result.page,
          totalPages: result.total_pages
        }, () => {
          // Remember state for the next mount if we´re not in a search view
          if (searchField === "") {
            sessionStorage.setItem('HomeState', JSON.stringify(this.state));
          }
        })
      })
      .catch(error => console.error('Error:', error))
    }
  
    render() {
      const { movies, searchField, currentPage, loading , totalPages} = this.state;
      const filteredMovies = movies.filter(movie => movie.name.toLowerCase().includes(searchField))
      
      return (
        <div className="app">
        <HeroImage />
        <SearchBox 
          callback={this.searchItems}
        />
        <CardList currentUser={this.props.currentUser} movies={filteredMovies} />
        {loading ? <Spinner /> : null}
        {(currentPage <= totalPages && !loading) ? <LoadMoreBtn text="Pokaż następne" onClick={this.loadMoreItems}/>  
        : null
      }
        <Footer />
        </div>
      );
    }
  }
  
  export default HomePage;