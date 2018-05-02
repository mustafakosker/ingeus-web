import React from 'react';
import UserFormContainer from './components/user/UserFormContainer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const App = () => (
  <MuiThemeProvider>
    <Router>
      <Route exact path="/" component={UserFormContainer}/>
    </Router>
  </MuiThemeProvider>
);

export default App;