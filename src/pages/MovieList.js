import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };

    this.showMovieList = this.showMovieList.bind(this);
  }

  componentDidMount() {
    this.showMovieList();
  }

  async showMovieList() {
    this.setState(
      { loading: true },
      async () => {
        const movieList = await movieAPI.getMovies();
        this.setState({
          loading: false,
          movies: movieList,
        });
      },
    );
  }

  renderBody() {
    const { movies } = this.state;
    return (
      <main>
        <div className="link-add-movie">
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
        <div data-testid="movie-list" className="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
      </main>
    );
  }

  render() {
    const { loading } = this.state;

    return (
      loading ? <Loading /> : this.renderBody()
    );
  }
}

export default MovieList;
