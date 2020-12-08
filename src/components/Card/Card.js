import React from 'react';
import './Card.css'
export const Card = (props) => (
 
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
                    <button className="watched" onClick="this.handleClick">Oglągnięte</button>
                    <button className="toWatch">Do oglądnięcia</button>
              </div>
          </div>
          </React.Fragment>
        
    }  
    </div>
)

