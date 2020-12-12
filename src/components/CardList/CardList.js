import React from 'react';
import { withRouter } from 'react-router-dom';
import Card from '../Card/Card';
import './CardList.css';


class CardList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          currentUser: this.props.currentUser,
          movies: this.props.movies,
        }
        
        console.log('CardList.js constructor');
        console.log(this.props.currentUser);
        console.log(this.props.movies);
      }


    render(){
        return(
            <div className="card-list">
                {this.state.movies.map(movie => (
                    ( !movie.poster_path || !movie.name||  !movie.overview  || !movie.vote_average ?null : <Card  key={movie.id} movie={movie} currentUser={this.state.currentUser}/>)
                ))}
            </div>
        )
    }
};

export default withRouter(CardList);