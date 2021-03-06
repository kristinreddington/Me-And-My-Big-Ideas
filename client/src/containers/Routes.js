import React from 'react';
import { Router, NavLink, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Home from '../components/Home'
import Ideas from './Ideas'
import IdeaNew from './New'
import IdeaEdit from './Edit'

const history = createBrowserHistory();
const Routes = () =>
  <Router history={history}>
    <div>
      <div id="route-card">
        <NavLink className="nav justify-content-center" to='/'>| My Big Ideas |</NavLink>
        <NavLink className="nav justify-content-center" to='/ideas'>|Ideas|</NavLink>
        <NavLink className="nav justify-content-center" to='/ideas/new'>| New Idea |</NavLink>
      </div>


      <Route exact path='/' component={Home} />
      <Route exact path='/ideas/' component={Ideas} />
      <Route path='/ideas/new' component={IdeaNew} />
      <Route exact path='/ideas/:id/edit' component={IdeaEdit} />

    </div>
  </Router>

export default Routes;
