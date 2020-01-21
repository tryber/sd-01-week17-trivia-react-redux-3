import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserForm from './components/UserForm';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={UserForm} />
        {/* <Route path="/settings" component={} />
        <Route path="/game" component={} />
        <Route path="/game/feedback" component={} />
        <Route path="/game/ranking" component={} /> */}
      </Switch>
    </BrowserRouter>
  );
}
