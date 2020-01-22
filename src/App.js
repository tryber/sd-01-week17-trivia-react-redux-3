import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
<<<<<<< HEAD
import Feedback from './components/Feedback'
=======
import LoginPage from './components/LoginPage';
import Settings from './components/Settings';
import Game from './components/Game';
>>>>>>> master
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
<<<<<<< HEAD
        <Route exact path="/" component={Feedback} />
        {/* <Route path="/settings" component={} />
        <Route path="/game" component={} />
        <Route path="/game/feedback" component={} />
=======
        <Route exact path="/" component={LoginPage} />
        <Route path="/settings" component={Settings} />
        <Route path="/game" component={Game} />
        {/* <Route path="/game/feedback" component={} />
>>>>>>> master
        <Route path="/game/ranking" component={} /> */}
      </Switch>
    </BrowserRouter>
  );
}
