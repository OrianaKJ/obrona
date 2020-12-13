import React from 'react';
import { withRouter } from 'react-router-dom';
import Card from '../Card/Card';
import './CardList.css';


class CardList extends React.Component{
    render(){
        console.log("CardList RENDER")
        console.log(this.props.movies.length);
        return(
            <div className="card-list">
                {this.props.movies.map(movie => {
                    return !movie.poster_path || !movie.name||  !movie.overview  || !movie.vote_average ?null : <Card  key={movie.id} movieId={movie.id} movie={movie} currentUser={this.props.currentUser}/>
                })}
            </div>
        )
    }
};

export default withRouter(CardList);