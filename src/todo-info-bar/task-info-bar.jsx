import './task-info-bar.scss'

const TaskInfoBar = ({ isOpenState }) => {
	return (
		<div className="task-info-bar">
			<div className={isOpenState ? 'task-info-bar__content' : 'task-info-bar__content task-info-bar__content--closed'}>
				<p className="task-info-bar__items">4 tasks left</p>
				<ul className="task-bar-filters">
					<li className="task-bar-filters__item task-bar-filters__item--active">
						<p className="task-bar-filters__text">All</p>
					</li>
					<li className="task-bar-filters__item">
						<p className="task-bar-filters__text">Active</p>
					</li>
					<li className="task-bar-filters__item">
						<p className="task-bar-filters__text">Completed</p>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default TaskInfoBar