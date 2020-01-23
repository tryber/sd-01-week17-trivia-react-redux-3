import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Settings from './components/Settings';
import Game from './components/Game';
import Feedback from './components/Feedback';
import Question from './components/Question';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Question} />
        <Route path="/settings" component={Settings} />
        <Route exact path="/game" component={Game} />
        <Route exact path="/game/feedback" component={Feedback} />
        {/* <Route path="/game/ranking" component={} /> */}
      </Switch>
    </BrowserRouter>
  );
}
