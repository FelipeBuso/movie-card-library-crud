import React from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends React.Component {
  constructor() {
    super();

    this.getMoviesData = this.getMoviesData.bind(this);

    this.state = {
      movies: [],
    };
  }

  async componentDidMount() {
    const movieList = await movieAPI.getMovies();
    this.getMoviesData(movieList);
  }

  getMoviesData(movies) {
    this.setState({
      movies,
    });
  }

  render() {
    const { movies } = this.state;
    return (
      <div data-testid="movie-list">
        {movies.length === 0 ? <Loading />
          : movies.map((movie) => (
            <MovieCard
              key={ movie.title }
              movie={ movie }
            />))}
      </div>
    );
  }
}

export default MovieList;
