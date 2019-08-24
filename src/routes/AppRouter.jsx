import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '@pages/home';
import NotFoundPage from '@pages/notfound';
import CustomerDashboard from '@pages/customer';
import AdminDashboard from '@pages/adminDashboard';
import AdminCustomer from '@pages/adminCustomer';
import CashierDashboard from '@pages/cashierDashboard';
import CashierCustomer from '@pages/cashierCustomer';



const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/dashboard/customer" component={CustomerDashboard} />
    <Route exact path="/cashier/dashboard" component={CashierDashboard} />
    <Route exact path="/cashier/customer" component={CashierCustomer} />
    <Route exact path="/admin/dashboard" component={AdminDashboard} />
    <Route exact path="/admin/customer" component={AdminCustomer} />

    <Route path="/" component={NotFoundPage} />
  </Switch>
);

export default Routes;
