import React from 'react';
import TodoIndexItem from './todo_index_item';
import { Link } from 'react-router-dom';

class TodoIndex extends React.Component {

	componentDidMount() {
		this.props.fetchTodos(this.props.projectId)
	}

	render() {

		return (
			<div>
				<Link to={`/projects/${this.props.projectId}/todos/new`}>
					New
				</Link>
				<h2>To-dos</h2>

			<ul className='todo-list'>
				{
					this.props.todos.map(todo => (
					<TodoIndexItem
						key={todo.id}
						deleteTodo={this.props.deleteTodo}
						updateTodo={this.props.updateTodo}
						projectId={this.props.projectId}
						todo={todo}	/>
					))
				}
			</ul>
			</div>
		)
	}
}

export default TodoIndex;
