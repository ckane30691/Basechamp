import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const TodoIndexItem = ({todo, deleteTodo, updateTodo, project}) => {
	return (
		<li>
			<Link to={`/todos/${todo.id}`}>
				{todo.title}
			</Link>
			<h2>{todo.body}</h2>
			<button onClick={() => deleteTodo(todo.id)}>Delete</button>
			<Link to={`/todos/${todo.id}/edit`}>Edit</Link>
		</li>
	)
}

export default TodoIndexItem;
