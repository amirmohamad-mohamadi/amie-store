import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/home-page/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './pages/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }
  unsubscrebeFromAuth = null;
  componentDidMount() {
    this.unsubscrebeFromAuth = auth.onAuthStateChanged
      (user => {
        this.setState({ currentUser: user });

        console.log(user);
      })
  }
  componentWillUnmount() {
    this.unsubscrebeFromAuth();
  }


  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
