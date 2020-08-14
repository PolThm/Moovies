import React, {Component} from "react";
import SearchBar from "./SearchBar";
import MovieOverview from "./MovieOverview";
import ClipLoader from "react-spinners/ClipLoader";
import {connect} from 'react-redux';

class HomePage extends Component {

  render() {
    let movieList;

    movieList = this.props.movies.slice(0, 30)
      .filter((movie) => new RegExp(this.props.searchBar, "i").exec(movie.title))
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

    if (this.props.loading) {
      movieList =
        <div className="text-center pt-24">
          <ClipLoader
            size={50}
            color={"black"}
            loading={this.props.loading}
          />
        </div>;
    }

    if (this.props.errorApi) {
      movieList = <p className="text-red-600 text-center pt-24">{this.props.errorApi}</p>;
    }

    return (
      <div>
        <h1 className="pt-20 text-center text-3xl tracking-wider text-gray-800">Welcome to <span className="text-red-400">Moovies</span></h1>
        <SearchBar/>
        {movieList}
      </div>
    )
  };
}

const mapStateToProps = (state) => {
  return {
    movies: state.moovies.movies,
    errorApi: state.moovies.apiError,
    loading: state.moovies.loading,
    searchBar: state.moovies.searchBar
  }

};

export default connect(
  mapStateToProps
)(HomePage);
