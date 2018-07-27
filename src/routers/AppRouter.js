import React, { Component } from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Home from '../components/Home';
import SignUp from '../components/Signup';
import Chat from '../components/Chat';

export const history = createHistory();

const NotFoundPage = () => (
  <div>
    404! - <Link to="/"> Go Home </Link>
  </div>
);

console.log('AppRouter');

class AppRouter extends Component {
  constructor(props) {
    super();
    this.state = {
      user: { username: '' }
    };
  }

  updateUsername = user => {
    console.log('AppRouter' + user);
  };

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route
            path="/"
            component={Home}
            exact={true}
            updateUsername={this.updateUsername}
          />
          <Route path="/signup" component={SignUp} />
          <Route path="/chat" component={Chat} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;

// <Route path="/" component={TestingGoogleLogin} exact={true} />
