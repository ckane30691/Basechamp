# Basechamp


Instead of having stuff scattered all over the place — strewn across separate products, lost in inboxes, or scrawled on stickies or notepads — Basechamp brings all the projects your company’s working on under one roof. Organized, centralized, and clear so everyone knows what to do, everyone knows where things stand, and everyone can get what they need without having to ask around all the time.

[Basechamp Live Site](https://basechamp.herokuapp.com/#/)

[Basechamp Wiki](https://github.com/ckane30691/Basechamp/wiki)

### Technologies Used:
* Ruby on Rails
* Potsgres
* React
* Redux

### Core Features:
#### Projects
* The most challenging part of implementing the projects feature was figuring out how to set sup the state and the database on the back end because everything belongs to a project.  Ultimately I decided that projects should just be a table with a title and description and everything else will just have foreign keys pointing back to the project it belongs to. This allowed me to keep my state and database normalized and not nest a lot of information under the projects key.  At a later time I plan on implementing teams using a joins table to allow a user to add other users to their projects.


#### Messages
* The interesting part about messages is figuring out all the routes because messages belong to projects and also have many comments.  For my back end routes I chose to nest messages under projects for the create and index routes only because I need the project id from params in order to grab the right messages.  For the remaining routes, however, I chose not to nest them under projects as the ID that is needed to determine the action is provided by the message id in the route.

#### Future Directions for Basechamp
* Implement Schedule
* Implement Teams
* Implement User Profile
* Implement User Search
* Implement Teams
