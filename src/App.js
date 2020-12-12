import React, {Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import SignInAndUp from './components/SignInAndUp/SignInAndUp';
import UserPanel from './components/UserPanel/UserPanel';
import { auth,createUserProfileDocument } from './firebase/firebase.utils';



class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
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
    return (
        <div>
        
        <Header currentUser={this.state.currentUser}/>
          <Switch>
            {console.log('App.js')}
            {console.log(this.state.currentUser)}
            <Route exact path="/" render={(props) => <HomePage currentUser={this.state.currentUser} {...props} /> } />
            <Route path="/user" component={UserPanel} />
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
