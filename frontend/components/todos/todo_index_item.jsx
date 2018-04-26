import React from 'react';
import { Link } from 'react-router-dom';

const TodoIndexItem = ({todo, deleteTodo, updateTodo, project}) => {
	return (
		<li>
			<Link className='todo-title' to={`/projects/${todo.project_id}/todos/${todo.id}`}>
				{todo.title}
			</Link>
			<h2 className='todo-body'>{todo.body}</h2>
			<button className="delete-project-btn" onClick={() => deleteTodo(todo.id)}>X</button>
			<Link className="todo-edit-btn" to={`/projects/${todo.project_id}/todos/${todo.id}/edit`}>Edit this to-do</Link>
		</li>
	);
};

export default TodoIndexItem;
