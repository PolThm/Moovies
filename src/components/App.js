import React, {Component} from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from "./Header";
import HomePage from "./HomePage";
import FavoritesPage from "./FavoritesPage";
import {apiFetchData} from '../actions';
import {connect} from "react-redux";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import {FirebaseAuthProvider} from "@react-firebase/auth";
import {firebaseConfig} from "../firebaseConfig";

class App extends Component {
  componentDidMount() {
    firebase.auth().signOut();
    this.props.apiFetchData();
  }

  render() {
    return (
      <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
        <div className="container">
          <BrowserRouter>
            <div>
              <Header/>
              <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/favorites" exact component={FavoritesPage}/>
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      </FirebaseAuthProvider>
    );
  }
}

export default connect(
  null,
  {apiFetchData}
)(App);
