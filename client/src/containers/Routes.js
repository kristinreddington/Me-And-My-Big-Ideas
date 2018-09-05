import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, NavLink, Redirect, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Home from '../components/Home'
import Ideas from './Ideas'
import IdeaForm from './IdeaForm'
import EditIdea from './EditIdea'

const history = createBrowserHistory();

class Routes extends Component {
  render() {
  return (
  <Router history={history}>
    <div>
      <NavLink to='/'>My Big Ideas</NavLink>
      <NavLink to='/ideas'>Ideas</NavLink>
      <NavLink to='/ideas/new'>New Idea</NavLink>

      <Route exact path='/' component={Home} />
      <Route exact path='/ideas' component={Ideas} />
      <Route exact path='/ideas/new' component={IdeaForm} />
      <Route exact path='/ideas/:id/edit' component={EditIdea} />
    </div>
  </Router>
  )
 }
}
export default Routes;
