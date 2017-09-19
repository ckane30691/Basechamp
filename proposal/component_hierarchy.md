# React Component Hierarchy

### Functional Component Hierarchy

##### Root
  * App
  * NavBar
  * Main/SplashPage

### NavBar
  * NavBar
    * Components
      * SessionButtonContainer + SessionButtons
        * State: session

### Session
  * SessionFormContainer + SessionForm
    Route: /login
    State: errors.login

Note: New user sign up is rendered on MainPage

### Projects/Home View
  * ProjectIndexContainer + ProjectIndex
    * Route: /projects
    * State: users, projects
    * Components:
      * ProjectIndexItem
        * State: projects[:id], users[:id], ui


  * ProjectFormContainer + ProjectForm
    * Route: /projects/new
    * State: errors.projectForm


  * ProjectShowContainer + ProjectShow
    * Route: /projects/:projectId
    * State: users[:id], projects[:id], ui


Note: All other components are rendered inside of ProjectShow

### Todo lists
  * TodoListIndexContainer + TodoListIndex
    * Route: /projects/:projectId/todos
    * State: projects[:id], users[:id], todos, ui
    * Components:
      * TodoListIndexItem
        * State: todos[:id], users[:id], ui


  * TodoListShow
    * Route: /todos/:todoId
    * State: users[:id], projects[:id], todo[:id], ui


  * TodoListFormContainer + TodoListForm
    * Route for New: /projects/:projectId/todos/new
    * Route for Edit: /todos/:todoId/edit
    * State: users[:id], projects[:id], todo[:id] (if editing), ui

### Schedule
  * ScheduleIndexContainer + ScheduleIndex
    * Route: /projects/:projectId/schedule
    * State: projects[:id], users[:id], schedule, ui
      * Components:
        * ScheduleIndexItem
          * State: projects[:id], schedule[:id], users[:id], todo[:id], ui

Note: Schedule has an index & new/edit page only

  * ScheduleFormContainer + FormContainer
    * Route for new: /projects/:projectId/schedule/new
    * Route for edit: /schedule/:scheduleId/edit
    * State: users[:id], projects[:id], schedule/schedule[:id], ui

### Messages
  * MessageIndexContainer + MessageIndex
    * Route: /projects/:projectId/messages
    * State: projects[:id], users[:id], messages, ui
      * Components:
        * MessageIndexItem
          * State: message[:id], users[:id], projects[:id], ui


  * MessageShow
    * Route: /messages/:messageId
    * State: projects[:id], users[:id], messages[id], ui
      * Components:
        * CommentsIndexContainer + CommentsIndex
          * State: messages[:id], users[:id], projects[:id], ui, comments
        * CommentForm
          * State: message[:id], users[:id], projects[:id], ui, comments


  * MessageFormContainer + MessageForm
    * Route for New: /projects/:projectId/messages/new
    * Route for Edit: /messages/:messageId/edit
    * State: users[:id], message[:id] (if editing), projects[:id], ui
