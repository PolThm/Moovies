import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import {connect} from 'react-redux';

const HomePage = (props) => {
  return (
    <div>
      <h1 className="pt-20 text-center text-3xl tracking-wider text-gray-800">Welcome to <span className="text-red-400">Moovies</span></h1>
      <SearchBar/>
      <MovieList movieList={props.movies.slice(0, 30)}/>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    movies: state.moovies.movies,
  }
};

export default connect(
  mapStateToProps
)(HomePage);
