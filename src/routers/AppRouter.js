import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ContactDashboard from '../components/ContactDashboard';
import AddContact from '../components/AddContact';
import EditContact from '../components/EditContact';
import PageNotFound from '../components/PageNotFound';
import Header from '../components/Header';

class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={ContactDashboard} exact={true} />
            <Route path="/create" component={AddContact} />
            <Route path="/edit/:id" component={EditContact} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
