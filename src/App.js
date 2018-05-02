import React from 'react';
import UserFormContainer from './components/user/form/UserFormContainer';
import UserViewContainer from './components/user/view/UserViewContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const App = () => (
  <MuiThemeProvider>
    <Router>
      <div>
        <Route exact path="/" component={UserFormContainer}/>
        <Route path="/view" component={UserViewContainer}/>
      </div>
    </Router>
  </MuiThemeProvider>
);

export default App;