import React from "react";
import {connect} from "react-redux";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";

const FavoritesPage = (props) => {
  return (
    <div>
      <h1 className="pt-20 text-center text-3xl tracking-wider text-gray-800">Find your <span className="text-blue-400">Favorites</span></h1>
      <SearchBar/>
      <MovieList movieList={props.faMovies}/>
    </div>
  )
};

const mapStateToProps = (state) => {
  const movies = state.moovies.movies;
  const favorites = state.moovies.favorites;
  const faMovies = movies.filter(movie => favorites[movie.id]);
  return {
    faMovies: faMovies,
  }
};

export default connect(
  mapStateToProps
)(FavoritesPage);
