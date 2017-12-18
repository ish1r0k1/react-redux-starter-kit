import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { history } from '../store';
import HomeContainer from '../containers/HomeContainer';
import About from './About';
import NotFound from './NotFound';
import CoreLayout from './CoreLayout';

export default function App() {
  return (
    <ConnectedRouter history={history}>
      <CoreLayout children={
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" exact component={HomeContainer} />
          <Route component={NotFound} />
        </Switch>
      }
      />
    </ConnectedRouter>
  );
}
