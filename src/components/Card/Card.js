import React from 'react';
import './Card.css'
import Button from '../Button/Button'

export const Card = (props) => {
 function addMovie(e) {
    e.preventDefault();
    e.stopPropagation();
      props.currentUser ? (
        alert("Zalogowany")
      ) : (
        alert("Niezalogowany")
      )
    console.log(props.movie.id, props.movie.name, props.movie.vote_average)
  }

  return(
    <div>
    {
          <React.Fragment>
            <div className="card-container">
              <div className="poster-box">
                <img className="poster"  alt="" src={`https://image.tmdb.org/t/p/w342${props.movie.poster_path}`}></img>
              </div>
              <div className="movie-info">
                <h1>{props.movie.name}</h1>
                <p className="movie-overview">{props.movie.overview}</p>
                <p >Średnia ocena: {props.movie.vote_average}</p>
                <br></br>
              </div>
              <div className="buttons">
                <Button className="toWatch" onClick={e => addMovie(e)}>Do obejrzenia</Button>
              </div>
          </div>
          </React.Fragment>
        
    }  
    </div>
)
}
