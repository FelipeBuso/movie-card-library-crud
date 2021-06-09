import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
// import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div>
        <div data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
      </div>
    );
  }
}

export default MovieList;
