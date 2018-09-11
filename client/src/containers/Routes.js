import React, { Component } from 'react';
import { Router, Switch, NavLink, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Home from '../components/Home'
import Ideas from './Ideas'
import IdeaForm from './IdeaForm'
import EditIdea from './EditIdea'

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
      <Route exact path='/ideas' component={Ideas} />
      <Route path='/ideas/new' component={IdeaForm} />
      <Route exact path='/ideas/:id/edit' component={EditIdea} />

    </div>
  </Router>

export default Routes;
