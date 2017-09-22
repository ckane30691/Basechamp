import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const TodoIndexItem = ({todo, deleteTodo, updateTodo, projecId}) => {
	return (
		<li>
			<Link to={`/todos/${todo.id}`}>
				{todo.title}
			</Link>
			<h2>{todo.body}</h2>
			<button onClick={() => deleteTodo(todo.id)}>Delete</button>
		</li>
	)
}

export default TodoIndexItem;
