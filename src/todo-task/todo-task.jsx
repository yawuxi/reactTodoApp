import './todo-task.scss'

const TodoTask = ({ taskData, completeTask }) => {

	const { taskText } = taskData

	return (
		<li className="task-list__item">
			<label>
				<input type="checkbox" />
				<span className='task-list__checkbox' onClick={completeTask}></span>
				<p className="task-list__text">{taskText}</p>
				<button className="task-list__remove">Remove</button>
			</label>
		</li>
	)
}

export default TodoTask