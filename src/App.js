import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Settings from './components/Settings';
import PageGame from './components/PageGame';
import Feedback from './components/Feedback';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/settings" component={Settings} />
        <Route exact path="/game" component={PageGame} />
        <Route exact path="/game/feedback" component={Feedback} />
        {/* <Route path="/game/ranking" component={} /> */}
      </Switch>
    </BrowserRouter>
  );
}
