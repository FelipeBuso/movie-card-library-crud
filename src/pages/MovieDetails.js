import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
    this.fetchedMovie = this.fetchedMovie.bind(this);
    this.fetchIsDone = this.fetchIsDone.bind(this);
  }

  componentDidMount() {
    this.fetchedMovie();
  }

  async fetchedMovie() {
    const id = parseInt(window.location.pathname.split('/')[2], 10);
    const fetchedMovie = await movieAPI.getMovie(id);
    this.setState({
      movie: fetchedMovie,
      id,
    });
    this.fetchIsDone();
  }

  fetchIsDone() {
    this.setState({ isLoading: false });
  }

  render() {
    const { id, isLoading } = this.state;
    if (isLoading) {
      return <Loading />;
    }
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h3>{ `Title: ${title}` }</h3>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>
          EDITAR
        </Link>
        <Link to="/">
          VOLTAR
        </Link>
      </div>
    );
  }
}

MovieDetails.propTypes = { id: PropTypes.number }.isRequired;

export default MovieDetails;
