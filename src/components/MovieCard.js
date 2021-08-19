import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../css/Crud.css';

// link para /movies/:id

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, id } = movie;
    return (
      <div data-testid="movie-card" className="movie-card">
        <h4>{ title }</h4>
        <p>{ storyline }</p>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default MovieCard;
