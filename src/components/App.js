import React, {Component} from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from "./Header";
import HomePage from "./HomePage";
import FavoritesPage from "./FavoritesPage";
import history from '../history';
import {apiFetchData} from '../actions';
import {connect} from "react-redux";
import firebase from "firebase/app";
import "firebase/auth";
import {FirebaseAuthProvider} from "@react-firebase/auth";
import {firebaseConfig} from "../firebaseConfig";

class App extends Component {
  componentDidMount() {
    this.props.apiFetchData();
  }

  render() {
    return (
      <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
        <div className="container">
          <Router history={history}>
            <div>
              <Header/>
              <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/favorites" exact component={FavoritesPage}/>
              </Switch>
            </div>
          </Router>
        </div>
      </FirebaseAuthProvider>
    );
  }
}

export default connect(
  null,
  {apiFetchData}
)(App);
