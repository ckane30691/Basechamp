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
		const extraBtn = this.props.todos && this.props.todos.length > 3 ?
			<Link className='new-todo-button top-corner' to={`/projects/${this.props.match.params.projectId}/todos/new`}>
				Make another to-do
			</Link>
			: "";

		return (
			<div className="todo-index-body">
				<Link className="project-title" to={`/projects/${this.props.match.params.projectId}`}>{title}</Link>
				<div className="generic-index-container flex-start index-height">
					<Link className="back-btn" to={`/projects/${this.props.match.params.projectId}`}>↷</Link>
					<Link className='new-todo-button bottom' to={`/projects/${this.props.match.params.projectId}/todos/new`}>
						Make another to-do
					</Link>
					{extraBtn}
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
