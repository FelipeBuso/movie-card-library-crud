import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      load: true,
    };
    this.updateState = this.updateState.bind(this);
  }

  async componentDidMount() {
    const response = await movieAPI.getMovies();
    this.updateState(response);
  }

  updateState(response) {
    this.setState({
      movies: response,
      load: false,
    });
  }

  render() {
    const { movies, load } = this.state;
    const showMovies = (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>);
    return load ? <Loading /> : showMovies;
  }
}

export default MovieList;
