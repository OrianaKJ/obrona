import React, {Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import SignIn from './components/SignIn/SignIn';
import UserPanel from './components/UserPanel/UserPanel';
import { auth } from './firebase/firebase.utils';



class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
   this.unsubscribeFromAuth =  auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
        <div>
        
        <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/user" component={UserPanel} />
            <Route path="/signin" component={SignIn} />
          </Switch>
        </div>
      )

  }
  
}


export default App;
