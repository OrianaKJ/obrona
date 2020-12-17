import React from 'react';
import './Card.css'
import Button from '../Button/Button'
import {withRouter} from 'react-router-dom';
import { addMovieToWatch } from '../../firebase/firebase.utils';

class Card extends React.Component{
 handleAddMovie(e, props) {
    e.preventDefault();
    e.stopPropagation();
    props.currentUser ?
        addMovieToWatch(props.movieId, props.currentUser.id)
      : props.history.push('/signin');
  }

  render(){
    return(
      <div>
      {
        <div className="card-container">
          <div className="poster-box">
            <img className="poster"  alt="" src={`https://image.tmdb.org/t/p/w342${this.props.movie.poster_path}`}></img>
          </div>
          <div className="movie-info">
            <h1>{this.props.movie.name}</h1>
            <p className="movie-overview">{this.props.movie.overview}</p>
            <p >Średnia ocena: {this.props.movie.vote_average}</p>
            <br></br>
          </div>
          {
            this.props.addToWatchButtonVisible === true
            ? this.props.watchedMoviesIds && this.props.watchedMoviesIds.includes(this.props.movieId)
              ? <Button className="alreadyWatched" disabled>Dodany do listy</Button>
              : <Button className="toWatch" onClick={(e) => this.handleAddMovie(e, this.props)}>Do obejrzenia</Button>
            : null
          }
         </div>
      }  
      </div>
  )}
}

export default withRouter(Card);