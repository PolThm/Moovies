import React from "react";
import {connect} from "react-redux";
import MovieOverview from "./MovieOverview";
import SearchBar from "./SearchBar";

const FavoritesPage = (props) => {
  const listOfFavorites = props.faMovies
    .filter((movie) => new RegExp(props.searchBar, "i").exec(movie.title))
    .map((movie) => {
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
      <h1 className="pt-20 text-center text-3xl tracking-wider text-gray-800">My <span className="text-blue-400">Favorites</span></h1>
      <SearchBar/>
      {listOfFavorites}
    </div>
  )
};

const mapStateToProps = (state) => {
  const movies = state.moovies.movies;
  const favorites = state.moovies.favorites;
  const faMovies = movies.filter(movie => favorites[movie.id]);
  return {
    faMovies: faMovies,
    searchBar: state.moovies.searchBar
  }
};

export default connect(
  mapStateToProps
)(FavoritesPage);
