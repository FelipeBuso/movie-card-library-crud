import React, { Component } from 'react';
import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: '',
    };
    this.captureMovie = this.captureMovie.bind(this);
  }

  componentDidMount() {
    this.captureMovie();
  }

  async captureMovie() {
    const listMovieImport = await movieAPI.getMovies();
    this.setState({
      movies: listMovieImport,
    });
  }

  render() {
    const { movies } = this.state;

    return (
      <div data-testid="movie-list">
        {movies ? movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
          : <Loading />}
      </div>
    );
  }
}

export default MovieList;
