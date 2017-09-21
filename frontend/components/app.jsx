import React from 'react';
import { Provider } from 'react-redux';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import ProjectIndexContainer from './projects/project_index_container';
import ProjectFormContainer from './projects/project_form_container';
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
      <ProtectedRoute exact path="/projects" component={ProjectIndexContainer} />
      // More on passing functions to route component prop here:
      // https://stackoverflow.com/questions/33062830/using-react-router-with-a-layout-page-or-multiple-components-per-page
      <Route exact path="/projects/new" component={() =><div><ProjectIndexContainer/><ProjectFormContainer/></div>} />
    </Switch>
</div>
);

export default App;
