# Routes

## API Endpoints

### users
  * POST /api/users - Signs a new user up

### session
  * POST /api/session - Logs a user in
  * DELETE /api/session - Logs a user out

### projects
  * POST /api/projects - Creates a new project
  * GET /api/projects - Returns all projects
  * GET /api/projects/:id - Returns a specific project
  * DELETE /api/projects/:id - Deletes a project
  * GET /api/projects/:id/todos - Returns all the todos for a project
  * POST /api/projects/:id/todos - Creates a new todo for a project
  * GET /api/projects/:id/messages - Returns all the messages for a project
  * POST /api/projects/:id/messages - Creates a new message for a project
  * GET /api/projects/:id/schedule - Returns the schedule (Index of events) for a project
  * POST /api/projects/:id/schedule - Creates a new event in the schedule for a project

### todos
  * GET /api/todos/:id - Gets a specific todo
  * PATCH /api/todos/:id - Edit a todo
  * DELETE /api/todos/:id - Deletes a todo

### messages
  * GET /api/messages/:id - Gets a specific message
  * GET /api/messages/:id/comments - Gets all the comments on a specific message
  * POST /api/messages/:id/comments - Creates a new comment
  * PATCH /api/messages/:id - Edit a message
  * DELETE /api/messages/:id - Deletes a message (comments are dependent: :destroy)

### comments
 * DELETE /api/comments/:id - Deletes a comment

### schedule
 * DELETE /api/schedule/:id - Deletes an event from the schedule
 * PATCH /api/schedule/:id - Edit an event

## Frontend Routes
  * / - Splash page with new user sign up form
  * /login
  * /projects - HomeView/Dashboard Page
  * /projects/new - Create a new project
  * /projects/:projectId - Project Show Page
  * /projects/:projectId/todos - Index of todos for a project
  * /projects/:projectId/todos/new - Create new todo for a project
  * /projects/:projectId/todos/:todoId/edit - Edit a todo for a project
  * /projects/:projectId/todos/:todoId - Show page for a todo
  * /projects/:projectId/messages - Index of all messages for a project
  * /projects/:projectId/messages/:messageId - Show page for a message
  * /projects/:projectId/messages/new - Form page for a new message
  * /projects/:projectId/messages/edit - Form page for editing a message
  * /projects/:projectId/schedule - Shows all events for a project
  * /projects/:projectId/schedule/new - New Event Form
  * /projects/:projectId/schedule/edit - Edit Event Form
