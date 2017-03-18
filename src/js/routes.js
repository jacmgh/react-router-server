import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Actors from './components/Actors';
import Movies from './components/Movies';
import MoviesGenre from './components/MoviesGenre';

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/actors" component={Actors}/>
        <Route path="/movies" component={Movies}>
            <Route path="/movies/:genre" component={MoviesGenre}/>
        </Route>
    </Route>
);

export default routes;
