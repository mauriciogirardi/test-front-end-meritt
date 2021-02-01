import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from 'pages/Dashboard';
import Exam from 'pages/Exam';

const Router: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/exam" exact component={Exam} />
  </Switch>
);

export default Router;
