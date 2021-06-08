import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/new" component={NewMovie} />
        <Route
          path="/movies/:id"
          render={(props) => <MovieDetails {...props} />}
        />
        <Route
          path="/movies/:id/edit"
          render={(props) => <EditMovie {...props} />}
        />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
