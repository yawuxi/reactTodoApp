import './task-list.scss'
import TodoTask from '../todo-task/todo-task'

const TaskList = ({ isOpenState, tasks, completeTask }) => {

	const result = tasks.map(task => {
		const { id, ...taskData } = task
		return <TodoTask taskData={taskData} completeTask={() => { completeTask(id) }} key={id} />
	})

	return (
		<div
			className={isOpenState ? 'task-list-wrap' : 'task-list-wrap task-list-wrap--closed'}>
			<ul className={isOpenState ? 'task-list' : 'task-list task-list--closed'}>
				{result}
			</ul>
		</div>
	)
}

export default TaskList