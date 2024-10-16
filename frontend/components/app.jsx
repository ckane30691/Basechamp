import React from 'react';
import { Provider } from 'react-redux';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import ProjectIndexContainer from './projects/project_index_container';
import ProjectFormContainer from './projects/project_form_container';
import Splash from './greeting/splash.jsx';
import ProjectShowContainer from './projects/project_show_container';
import TodoIndexContainer from './todos/todo_index_container';
import TodoFormContainer from './todos/todo_form_container';
import TodoShowContainer from './todos/todo_show_container';
import MessageIndexContainer from './messages/message_index_container';
import MessageFormContainer from './messages/message_form_container';
import MessageShowContainer from './messages/message_show_container';
import CommentIndexContainer from './comments/comment_index_container';
import CommentFormContainer from './comments/comment_form_container';
import EventIndexContainer from './events/event_index_container';
import EventFormContainer from './events/event_form_container';
import EventShowContainer from './events/event_show_container';

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
        <img className="icon" src="/assets/basecamp-icon-3a50735ad25100f6c456731f315e4a6d6f3ca6b9896968065c8b4a7851336a91.svg"/>
        <Link to='/' className="header-link"><h1>Basechamp</h1></Link>
      </div>
      <GreetingContainer />
    </header>



    <Switch>
      // NOTE need to fix new and edit project routes
      <AuthRoute exact path="/" component={Splash} />
      <AuthRoute exact path="/login" component={SessionFormContainer} />
      // NOTE change the signup route after splash page is working
      <AuthRoute exact path="/signup" component={SessionFormContainer} />
      <ProtectedRoute exact path="/projects" component={ProjectIndexContainer} />
      // More on passing functions to route component prop here:
      // https://stackoverflow.com/questions/33062830/using-react-router-with-a-layout-page-or-multiple-components-per-page
      <ProtectedRoute exact path="/projects/new" component={() =><div className="entire-project-body"><ProjectIndexContainer/><ProjectFormContainer/></div>} />
      <ProtectedRoute exact path="/projects/:projectId" component={ProjectShowContainer} />
      <ProtectedRoute exact path="/projects/:projectId/edit" component={() => <div className="entire-project-body"><ProjectIndexContainer/></div>} />
      <ProtectedRoute exact path="/projects/:projectId/todos" component={TodoIndexContainer} />
      <ProtectedRoute exact path="/projects/:projectId/todos/new" component={TodoFormContainer} />
      <ProtectedRoute exact path="/projects/:projectId/todos/:todoId" component={TodoShowContainer} />
      <ProtectedRoute exact path="/projects/:projectId/todos/:todoId/edit" component={TodoFormContainer} />
      <ProtectedRoute exact path="/projects/:projectId/messages" component={MessageIndexContainer} />
      <ProtectedRoute exact path="/projects/:projectId/messages/new" component={MessageFormContainer} />
      <ProtectedRoute exact path="/projects/:projectId/messages/:messageId" component={() => <div><MessageShowContainer/><CommentIndexContainer/><CommentFormContainer/></div>} />
      <ProtectedRoute exact path="/projects/:projectId/messages/:messageId/edit" component={MessageFormContainer} />
      <ProtectedRoute exact path="/projects/:projectId/events" component={EventIndexContainer} />
      <ProtectedRoute exact path="/projects/:projectId/events/new" component={EventFormContainer} />
      <ProtectedRoute exact path="/projects/:projectId/events/:eventId" component={EventShowContainer} />
      <ProtectedRoute exact path="/projects/:projectId/events/:eventId/edit" component={EventFormContainer} />
    </Switch>
</div>
);

export default App;
