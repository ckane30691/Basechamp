import React from 'react';
import { Provider } from 'react-redux';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import ProjectIndexContainer from './projects/project_index_container';

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

    <div className='app-body-container'>
      <div className="hero-img-container">
        <img className="hero-img" alt="hero image" src="https://s3-us-west-1.amazonaws.com/basechamp/basecamp_hero.jpg"/>
      </div>

      <div className="intro-container">
        <h1 className="intro-title">We've been expecting you.</h1>

        <p className="intro-body">
          All growing businesses run into the same fundamental problems.
          Hair on fire, buried under email, stuff everywhere.
          The good news? Basechamp solves them.
        </p>
      </div>

    <Switch>
      <AuthRoute exact path="/login" component={SessionFormContainer} />
      <AuthRoute exact path="/signup" component={SessionFormContainer} />
      <ProtectedRoute path="/projects" component={ProjectIndexContainer} />
    </Switch>
  </div>
</div>
);

export default App;
