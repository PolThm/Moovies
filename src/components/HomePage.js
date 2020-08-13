import React, {Component} from "react";
import SearchBar from "./SearchBar";
import MovieOverview from "./MovieOverview";
import ClipLoader from "react-spinners/ClipLoader";
import {connect} from 'react-redux';

class HomePage extends Component {

  render() {
    console.log(this.props.movies);

    let movieList;

    movieList = this.props.movies.slice(0, 30).map(movie => {
      return (
        <MovieOverview
          key={movie.id}
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
    loading: state.moovies.loading
  }
};

export default connect(
  mapStateToProps
)(HomePage);
