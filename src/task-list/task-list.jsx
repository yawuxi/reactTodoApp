import './task-list.scss'

const TaskList = ({ isOpenState }) => {
	return (
		<div
			className={isOpenState ? 'task-list-wrap' : 'task-list-wrap task-list-wrap--closed'}>
			<ul className={isOpenState ? 'task-list' : 'task-list task-list--closed'}>

			</ul>
		</div>
	)
}

export default TaskList