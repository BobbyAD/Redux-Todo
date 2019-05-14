import React from "react";
import { connect } from 'react-redux';

import { addTask, toggleComplete, removeTasks } from '../actions';



import "./Todo.scss";

class Todo extends React.Component {
	state = {
		newTask: ""
	};

	addTask = e => {
		e.preventDefault();
		this.props.addTask(this.state.newTask);
		this.setState({ newTask: "" });
	};

	handleChanges = e => {
		this.setState({ newTask: e.target.value });
	};

	toggleComplete = id => {
		this.props.toggleComplete(id);
	}

	render() {
		return (
			<div className="todo-app">
				<h2>Welcome to your Todo App!</h2>
				<form onSubmit={this.addTask} className='task-form'>
					<input
						type="text"
						value={this.state.newTask}
						onChange={this.handleChanges}
						placeholder="Add A Task"
					/>
					<input type="submit" value="+"/>
				</form>
				<div className="todo-list">
					{this.props.todos &&
						this.props.todos.map(task => (
							<div 
								className={'task ' + (task.completed ? 'completed' : '') }
								onClick={() => this.toggleComplete(task.id)} 
								key={task.id}
							>
								<p>{task.value}</p>
							</div>
						))}
				</div>
				<button className='remove-btn' onClick={this.props.removeTasks}>
					Remove Tasks
				</button>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		todos: state.todos
	};
};

export default connect(mapStateToProps, { addTask, toggleComplete, removeTasks })(Todo);
