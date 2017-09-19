# Database Schema


### users

| column name| data type | details|
| ---- | ----- | ------|
| id | integer | not null. primary key|
| username | string | not null, indexed, unique|
| fname| string | not null |
| lname| string | not null |
| password_digest | string | not null |
| session_token| string | not null, indexed, unique|
| created_at | datetime | not null |
| updated_at | datetime | not null |


### Projects

| column name| data type | details      |
| ---- | ----- | ------|
|id | integer | not null, primary key |
|title | string | not null, unique true|
|desc | string |  |
|author_id | integer | foreign key |
| created_at | datetime | not null |
| updated_at | datetime | not null |


### Messages

| column name| data type | details      |
| ---- | ----- | ------|
| id | integer | not null, primary key |
| title | string | not null |
| body | string | not null |
| project_id| integer | not null, foreign key |
| author_id | integer | not null, foreign key |
| created_at | datetime | not null |
| updated_at | datetime | not null |


### Comments

| column name| data type | details      |
| ---- | ----- | ------|
| id | integer | not null, primary key |
| body | string | not null |
| author_id | integer | not null |
| message_id | integer | not null |
| created_at | datetime | not null |
| updated_at | datetime | not null |


### Todos

| column name| data type | details      |
| ---- | ----- | ------|
| id | integer | not null, primary key |
| title | string | not null |
| body | string | not null |
| author_id | integer | not null, foreign key |
| project_id | integer | not null, foreign key |
| created_at | datetime | not null |
| updated_at | datetime | not null |


### Events
| column name| data type | details      |
| ---- | ----- | ------|
| id | integer | not null, primary key |
| title| string | not null |
| body | string |  |
| author_id | integer | not null, foreign key |
| project_id | integer | not null, foreign key |
| start_date | datetime | not null |
| end_date | datetime | not null |
| created_at | datetime | not null |
| updated_at | datetime | not null |
