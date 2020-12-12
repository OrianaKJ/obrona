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
      currentUser: null,
      componentDidMount: false,
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      this.setState({componentDidMount: true});
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
    console.log("componentDidMount " + this.state.componentDidMount);
    if (!this.state.componentDidMount) {
      return null;
    }
    return (
        <div>
        
        <Header currentUser={this.state.currentUser}/>
          <Switch>
            {console.log('App.js')}
            <Route exact path="/" component={HomePage}  currentUser={this.state.currentUser} />
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
