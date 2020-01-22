import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Feedback from './components/Feedback'
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Feedback} />
        {/* <Route path="/settings" component={} />
        <Route path="/game" component={} />
        <Route path="/game/feedback" component={} />
        <Route path="/game/ranking" component={} /> */}
      </Switch>
    </BrowserRouter>
  );
}
