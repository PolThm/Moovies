import React, {Component} from "react";
import imdb from "../apis/imdb";
import SearchBar from "./SearchBar";
import MovieOverview from "./MovieOverview";

class HomePage extends Component {
  state = {
    movies: [],
    selectedMovie : null
  };

  componentDidMount() {
    this.onTermSubmit('Comedy');
  };

  onTermSubmit = async (term) => {
    const response = await imdb.get('');

    this.setState({
      movies: response.data.items,
      // selectedMovie: response.data[0]
    });

    console.log(this.state.movies);
  };

  render() {
    const movies = this.state.movies;

    const movieList = movies.map(movie => {
      return (
        <MovieOverview
          key={movie.id}
          img={movie.images}
          title={movie.title}
        />
      );
    });

    return (
      <div>
        <SearchBar/>
        {movieList}
      </div>
    )
  };
}

export default HomePage;
