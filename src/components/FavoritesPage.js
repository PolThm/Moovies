import React from "react";
import {connect} from "react-redux";
import MovieOverview from "./MovieOverview";

const FavoritesPage = (props) => {
  const listOfFavorites = props.faMovies.map(movie => {
    return (
      <MovieOverview
        key={movie.id}
        id={movie.id}
        img={movie.image}
        title={movie.title}
        year={movie.year}
        crew={movie.crew}
      />
    );
  });

  return (
    <div>
      <h1 className="py-20 text-center text-3xl uppercase tracking-wider text-gray-800">My favorites movies</h1>
      {listOfFavorites}
    </div>
  )
};

const mapStateToProps = (state) => {
  const movies = state.moovies.movies;
  const favorites = state.moovies.favorites;
  const faMovies = movies.filter(movie => favorites[movie.id]);
  return {
    faMovies: faMovies
  }
};

export default connect(
  mapStateToProps
)(FavoritesPage);
