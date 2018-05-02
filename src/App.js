import React, {Component} from 'react';
import UserForm from './components/user/UserForm';
import {BrowserRouter as Router, Route} from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <Route exact path="/" component={UserForm}/>
        </Router>
      </MuiThemeProvider>
    );
  }
}