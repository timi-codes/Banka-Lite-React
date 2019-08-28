import React from 'react';
import { Route, Switch, BrowserRouter as Router  } from 'react-router-dom';
import HomePage from '@pages/home';
import NotFoundPage from '@pages/notfound';
import CustomerDashboard from '@pages/customer';
import LoginPage from '@pages/loginPage';
import SignUpPage from '@pages/signupPage';


const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/dashboard/customer" component={CustomerDashboard} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/signup" component={SignUpPage} />
      <Route path="/" component={NotFoundPage} />
    </Switch>
  </Router>
);

export default App;
