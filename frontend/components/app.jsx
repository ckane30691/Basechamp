import React from 'react';
import { Provider } from 'react-redux';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import ProjectIndexContainer from './projects/project_index_container';
import Splash from './greeting/splash.jsx'

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <div className="home-container">
        <img className="icon" src="https://s3-us-west-1.amazonaws.com/basechamp/basecamp_icon.svg"/>
        <Link to='/' className="header-link"><h1>Basechamp</h1></Link>
      </div>
      <GreetingContainer />
    </header>

    <Switch>
      <AuthRoute exact path="/" component={Splash} />
      <AuthRoute exact path="/login" component={SessionFormContainer} />
      // NOTE change the signup route after splash page is working
      <AuthRoute exact path="/signup" component={SessionFormContainer} />
      <ProtectedRoute path="/projects" component={ProjectIndexContainer} />
    </Switch>
</div>
);

export default App;
