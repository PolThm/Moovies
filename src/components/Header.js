import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {signIn, signOut} from "../actions";
import firebase from "firebase";


class Header extends Component {
  logInOut = () => {
    if (!this.props.isSignedIn) {
      // firebase.auth().signInAnonymously();

      const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(googleAuthProvider);

      this.props.signIn();
    } else {
      firebase.auth().signOut();
      this.props.signOut();
    }
  };

  render() {
    firebase.auth().onAuthStateChanged(firebaseUser => {
      console.log(firebaseUser);
    });

    let logMenu;

    if (!this.props.isSignedIn) {
      logMenu = "Login";
    } else {
      logMenu = "Logout";
    }

    return (
      <header className="py-4 flex justify-between">
        <h2 className="text-4xl text-red-400">Moovies<span className="block text-2xl text-gray-700">by Pol Thomas</span>
        </h2>
        <nav>
          <ul className="sm:flex text-2xl pt-4 pl-4 uppercase tracking-wider text-blue-400">
            <li className="hover:text-red-400"><Link to="/">Home</Link></li>
            <li className="sm:ml-10 hover:text-red-400"><Link to="/favorites">Favorites</Link></li>
            <li
              className="logMenu sm:ml-10 px-4 border border-blue-400 rounded-full text-white hover:text-blue-400 bg-blue-400 hover:bg-white normal-case cursor-pointer"
              onClick={this.logInOut}>{logMenu}</li>
          </ul>
        </nav>
      </header>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn
  }
};

export default connect(
  mapStateToProps,
  {signIn, signOut}
)(Header);
