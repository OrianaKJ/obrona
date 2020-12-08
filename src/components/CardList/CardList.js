import React from 'react';
import { Card } from '../Card/Card';
import './CardList.css';


export const CardList = (props) => (
    <div className="card-list">
        {props.movies.map(movie => (
            <Card  key={movie.id} movie={movie}/>
        ))}
    </div>
);