import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import SignIn from './components/SignIn/SignIn';
import UserPanel from './components/UserPanel/UserPanel'

function App () {
  return (
    <div>
    
    <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/user" component={UserPanel} />
        <Route exact path="/signin" component={SignIn} />
      </Switch>
    </div>
  )
}


export default App;
