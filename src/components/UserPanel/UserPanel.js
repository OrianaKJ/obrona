import React from 'react';
import { getMoviesToWatch } from '../../firebase/firebase.utils';
import CardList from '../CardList/CardList';

class UserPanel extends React.Component {
    state = {moviesToWatch: null};

    async loadMovies(moviesIds) {
        const moviesToWatch = [];
        moviesIds.forEach(async (movieId) => {
            const movie = await this.fetchMovie(movieId);
            moviesToWatch.push(movie);
            this.setState({ moviesToWatch: moviesToWatch })
        });
    }
    
    async fetchMovie(movieId) {
        const endpoint = `https://api.themoviedb.org/3/tv/${movieId}?api_key=284b6c29bdbbc5b45a7d60b8e41050e6&language=pl-PL`;

        try {
            const result = await fetch(endpoint);
            return await result.json();
        } catch (error) {
            return console.error('Error:', error);
        }
    }

    async componentDidMount() {
        if (this.props.currentUser) {
            console.log('test');
            const moviesIds = await getMoviesToWatch(this.props.currentUser.id);
            await this.loadMovies(moviesIds);
        }
    }

    render() {
        console.log("UserPanel RENDER");
        console.log(this.state.moviesToWatch);
        console.log(this.props.currentUser);
        return(
            this.state.moviesToWatch
            ? <CardList currentUser={this.props.currentUser} movies={ this.state.moviesToWatch } />
            : <div>Na głównej stronie możesz przejrzeć filmy i wybrać, które chcesz dodać do listy do obejrzenia</div>
        );
    }
}
 
export default UserPanel