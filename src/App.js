import React from 'react';
import UserForm from './components/user/UserForm';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const App = () => (
  <MuiThemeProvider>
    <Router>
      <Route exact path="/" component={UserForm}/>
    </Router>
  </MuiThemeProvider>
);

export default App;