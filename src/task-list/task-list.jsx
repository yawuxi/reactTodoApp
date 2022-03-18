import './task-list.scss'
import TodoTask from '../todo-task/todo-task'

const TaskList = ({ isOpenState }) => {
	return (
		<div
			className={isOpenState ? 'task-list-wrap' : 'task-list-wrap task-list-wrap--closed'}>
			<ul className={isOpenState ? 'task-list' : 'task-list task-list--closed'}>
				<TodoTask />
				<TodoTask />
				<TodoTask />
				<TodoTask />
				<TodoTask />
			</ul>
		</div>
	)
}

export default TaskList