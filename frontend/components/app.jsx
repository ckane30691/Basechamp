import React from 'react';
import { Provider } from 'react-redux';
import SessionFormContainer from './session_form/session_form_container';
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
      <Link to='/' className="header-link"><h1>Basechamp</h1></Link>
    </header>
    <SessionFormContainer />
  </div>
);

export default App;
