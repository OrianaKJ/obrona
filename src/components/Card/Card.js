import React from 'react';
import './Card.css'
import Button from '../Button/Button'
import { Redirect, withRouter } from 'react-router-dom';

class Card extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
      movie: this.props.movie,
      key: this.props.key,
    }
    
    console.log('Card.js constructor');
    console.log(this.props.currentUser);
    console.log(this.props.movie);
  }

 handleAddMovie(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("test");
    return <Redirect to="/signin" />
  }

  render(){
    return(
      <div>
      {
            <React.Fragment>
              <div className="card-container">
                <div className="poster-box">
                  <img className="poster"  alt="" src={`https://image.tmdb.org/t/p/w342${this.state.movie.poster_path}`}></img>
                </div>
                <div className="movie-info">
                  <h1>{this.state.movie.name}</h1>
                  <p className="movie-overview">{this.state.movie.overview}</p>
                  <p >Średnia ocena: {this.state.movie.vote_average}</p>
                  <br></br>
                </div>
                <div className="buttons">
                  <Button className="toWatch" onClick={this.handleAddMovie}>Do obejrzenia</Button>
                </div>
            </div>
            </React.Fragment>
          
      }  
      </div>
  )}
}

export default withRouter(Card);