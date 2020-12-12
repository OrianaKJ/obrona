import React from 'react';
import {Card} from '../Card/Card';
import './CardList.css';


export const CardList = (props) => (
    <div className="card-list">
        {props.movies.map(movie => (
            ( !movie.poster_path || !movie.name||  !movie.overview  || !movie.vote_average ?null : <Card  key={movie.id} movie={movie} currentUser={props.currentUser}/>)
        ))}
    </div>
);