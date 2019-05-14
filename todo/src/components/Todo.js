import React from "react";
import { connect } from 'react-redux';

import { addTask, toggleComplete, removeTasks } from '../actions';



import "./App.css";

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
				<div className="todo-list">
					{this.props.todos &&
						this.props.todos.map(task => (
							<h3 
								className={'task ' + (task.completed ? 'completed' : '') }
								onClick={() => this.toggleComplete(task.id)} 
								key={task.id}
							>
								{task.value}
							</h3>
						))}
				</div>
				<form onSubmit={this.addTask}>
					<input
						type="text"
						value={this.state.newTask}
						onChange={this.handleChanges}
						placeholder="Add a new task"
					/>
					<input type="submit" value="Add a Task"/>
				</form>
				<button onClick={this.props.removeTasks}>REMOVE</button>
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
