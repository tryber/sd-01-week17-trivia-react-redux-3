import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserForm from './components/UserForm';
import './App.css';
import Header from '../src/components/Header'

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Header} />
        {/* <Route path="/settings" component={} />
        <Route path="/game" component={} />
        <Route path="/game/feedback" component={} />
        <Route path="/game/ranking" component={} /> */}
      </Switch>
    </BrowserRouter>
  );
}
