import React from 'react';
import UserForm from './components/user/UserForm';
import { BrowserRouter as Router, Route } from "react-router-dom";

const Routes = () => (
  <Router>
    <Route exact path="/" component={UserForm} />
  </Router>
);

export default Routes;
