import { Component } from 'react';
import './App.scss';

import TaskInput from '../task-input/task-input';
import TaskList from '../task-list/task-list';
import TaskInfoBar from '../todo-info-bar/task-info-bar';

class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			isOpen: true,
		}
	}

	openTaskList = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	render() {
		return (
			<div className="wrapper">
				<div className="app">
					<div className="app__content _container">
						<h1 className='app__title'>Todo App</h1>
						<TaskInput
							openTaskList={this.openTaskList}
							isOpenState={this.state.isOpen}
						/>
						<TaskList isOpenState={this.state.isOpen} />
						<TaskInfoBar isOpenState={this.state.isOpen} />
					</div>
				</div>
			</div>
		);
	}

}

export default App;
