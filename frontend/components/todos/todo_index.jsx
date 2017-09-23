import React from 'react';
import TodoIndexItem from './todo_index_item';
import { Link } from 'react-router-dom';

class TodoIndex extends React.Component {

	componentDidMount() {
		this.props.fetchProject(this.props.match.params.projectId)
		this.props.fetchTodos(this.props.match.params.projectId)
	}

	render() {

		const title = this.props.project ? this.props.project.title : "";

		return (
			<div className="todo-index-body">
				<Link className="project-title" to={`/projects/${this.props.match.params.projectId}`}>{title}</Link>
				<div className="todo-index-container">
					<Link className="delete-project-btn" to={`/projects/${this.props.match.params.projectId}`}>X</Link>
					<Link className='new-todo-button' to={`/projects/${this.props.match.params.projectId}/todos/new`}>
						Make another to-do
					</Link>
					<h2 className="feature-header">To-dos</h2>

					<ul className='todo-list'>
						{
							this.props.todos.map(todo => (
							<TodoIndexItem
								key={todo.id}
								deleteTodo={this.props.deleteTodo}
								updateTodo={this.props.updateTodo}
								project={this.props.project}
								todo={todo}	/>
							))
						}
					</ul>
				</div>
			</div>
		)
	}
}

export default TodoIndex;
