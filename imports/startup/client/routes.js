import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

// route components
import App from '../../ui/App';
import PMIPage from '../../ui/pages/PMIPage';

export const renderRoutes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/pmi" component={PMIPage} />
    </Switch>
  </Router>
);
