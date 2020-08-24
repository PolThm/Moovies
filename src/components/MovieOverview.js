import React, {Component} from 'react';
import {connect} from 'react-redux';
import {favoriteAdded, favoriteRemoved} from "../actions";
import firebase from "firebase/app";

class MovieOverview extends Component {
  favoriteActivated = () => {
    this.props.favoriteAdded(this.props.id);
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      firebase.firestore().collection('users').doc(currentUser.uid).update({
        favorites: firebase.firestore.FieldValue.arrayUnion(this.props.id)
      })
    }
  };

  favoriteDisabled = () => {
    this.props.favoriteRemoved(this.props.id);
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      firebase.firestore().collection('users').doc(currentUser.uid).update({
        favorites: firebase.firestore.FieldValue.arrayRemove(this.props.id)
      })
    }
  };

  render() {
    let fa;

    if (this.props.favorite) {
      fa = <i className="fas fa-heart mb-auto ml-8 text-2xl text-red-400 cursor-pointer" onClick={this.favoriteDisabled}/>;
    } else {
      fa = <i className="far fa-heart mb-auto ml-8 text-2xl cursor-pointer" onClick={this.favoriteActivated} />
    }

    return (
      <div className="my-10 p-6 border rounded-lg flex justify-between">
        <div className="flex">
          <img src={this.props.img} alt="movie's poster" className="movie-poster"/>
          <div className="ml-8 flex flex-col">
            <h2 className="font-bold">{this.props.title}</h2>
            <p className="pt-3">{this.props.year}</p>
            <p className="pt-1">{this.props.crew}</p>
          </div>
        </div>
        {fa}
      </div>
    );
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    favorite: state.moovies.favorites[ownProps.id],
  }
};

export default connect(
  mapStateToProps,
  {favoriteAdded, favoriteRemoved}
)(MovieOverview);
