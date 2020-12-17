import React, {Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import SignInAndUp from './components/SignInAndUp/SignInAndUp';
import UserPanel from './components/UserPanel/UserPanel';
import { auth,createUserProfileDocument,getMoviesToWatch } from './firebase/firebase.utils';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
      watchedMoviesIds:[]
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          if (this.state.currentUser) {
            getMoviesToWatch(this.state.currentUser.id)
              .then((moviesIds) => this.setState({watchedMoviesIds: moviesIds}));
          }
        });
      } else{
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    console.log(this.state.watchedMoviesIds)
    return (
        <div>
          <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact path="/" render={(props) => <HomePage currentUser={this.state.currentUser} {...props} watchedMoviesIds={this.state.watchedMoviesIds} /> } />
            <Route exact path="/user" render={(props) =>
              this.state.currentUser
                ? <UserPanel currentUser={this.state.currentUser} {...props} />
                : <SignInAndUp />
            } />
            <Route 
              exact
              path='/signin'
              render={() =>
                this.state.currentUser ? (
                    <Redirect to='/' />
                ) : (
                    <SignInAndUp />
                )
              }
            />
          </Switch>
        </div>
      )

  }
  
}


export default App;
