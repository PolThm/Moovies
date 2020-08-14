import React from "react";
import {connect} from "react-redux";

const FavoritesPage = (props) => {

  let listOfFavorites;

  if (props.favorites) {
    listOfFavorites =
      <div>Favorite added</div>
  }


  return (
    <div>
      <h1 className="py-20 text-center text-4xl uppercase tracking-wider text-gray-800">Favorites</h1>
      {listOfFavorites}
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    // Todo : Implement logic to get favorites movies from state
    favorites: state.moovies.favorites
  }
};

export default connect(
  mapStateToProps
)(FavoritesPage);
