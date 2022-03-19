import { Component } from 'react';
import nextId from "react-id-generator";
import './App.scss';

import TaskInput from '../task-input/task-input';
import TaskList from '../task-list/task-list';
import TaskInfoBar from '../todo-info-bar/task-info-bar';

class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			tasks: [
				{ taskText: 'Example of task #1', taskCompleted: false, id: nextId() },
				{ taskText: 'Example of task #2', taskCompleted: false, id: nextId() },
				{ taskText: 'Example of task #3', taskCompleted: false, id: nextId() },
			],
			isOpen: true,
		}
	}

	openTaskList = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	render() {

		const { tasks, isOpen } = this.state

		return (
			<div className="wrapper">
				<div className="app">
					<div className="app__content _container">
						<h1 className='app__title'>Todo App</h1>
						<TaskInput
							openTaskList={this.openTaskList}
							isOpenState={isOpen}
						/>
						<TaskList
							isOpenState={isOpen}
							completeTask={this.completeTask}
							tasks={tasks}
						/>
						<TaskInfoBar
							isOpenState={isOpen}
							tasks={tasks} />
					</div>
				</div>
			</div>
		);
	}

}

export default App;
