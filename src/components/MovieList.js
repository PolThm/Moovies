import React from "react";
import MovieOverview from "./MovieOverview";
import {connect} from 'react-redux';
import ClipLoader from "react-spinners/ClipLoader";

const MovieList = (props) => {
  let listOfMovies;

  listOfMovies = props.movieList
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

  if (props.loading) {
    listOfMovies =
      <div className="text-center pt-24">
        <ClipLoader
          size={50}
          color={"black"}
          loading={props.loading}
        />
      </div>;
  }

  if (props.errorApi) {
    listOfMovies = <p className="text-red-600 text-center pt-24">{props.errorApi}</p>;
  }

  return (
    <div>
      {listOfMovies}
    </div>
  )
};


const mapStateToProps = (state) => {
  return {
    errorApi: state.moovies.apiError,
    loading: state.moovies.loading,
    searchBar: state.moovies.searchBar
  }
};

export default connect(
  mapStateToProps
)(MovieList);
