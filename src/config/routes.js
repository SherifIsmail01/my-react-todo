import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import TodosContainer from '../containers/TodosContainer';
import CreateTodoForm from '../components/CreateTodoForm';

export default (
  <Switch>
    <Route exact path='/' component={ Home }/>
    <Route path='/todos' component={ TodosContainer }/>
    <Route path='/newtodo' component={ CreateTodoForm }/>
  </Switch>
)
