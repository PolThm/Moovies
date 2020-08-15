import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {signIn, signOut, favoriteAdded} from "../actions";
import firebase from "firebase";

class Header extends Component {
  logInOut = () => {
    if (!this.props.isSignedIn) {
      const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(googleAuthProvider);

      firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
          const userRef = firebase.firestore().collection('users').doc(firebaseUser.uid);
          userRef.get()
            .then(doc => {
              for (const favorite of Object.keys(this.props.favorites)) {
                userRef.update({
                  favorites: firebase.firestore.FieldValue.arrayUnion(favorite)
                })
              }

              if (doc.exists) {
                for (const favorite of doc.data().favorites) {
                  this.props.favoriteAdded(favorite);
                }
              } else {
                userRef.set({
                  favorites: []
                })
              }
            });
        }
      });

      this.props.signIn();
    } else {
      firebase.auth().signOut();
      this.props.signOut();
    }
  };

  render() {
    let logMenu;

    if (!this.props.isSignedIn) {
      logMenu = "Login";
    } else {
      logMenu = <Link to="/">Logout</Link>
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
    isSignedIn: state.firebase.isSignedIn,
    favorites: state.moovies.favorites
  }
};

export default connect(
  mapStateToProps,
  {signIn, signOut, favoriteAdded}
)(Header);
