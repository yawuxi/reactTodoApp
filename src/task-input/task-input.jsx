import './task-input.scss';
import taskInputArrow from '../images/taskInputArrow.png';

const TaskInput = ({ openTaskList, isOpenState }) => {

	return (
		<div className="task-input">
			<div className="task-input__content">
				<img
					className={isOpenState ? 'task-input__image task-input__image--active' : 'task-input__image'}
					src={taskInputArrow}
					alt="Раскрыть список задач или скрыть его"
					onClick={openTaskList}
				/>
				<input
					className="task-input__input"
					type="text"
					placeholder="Write your task here..." />
				<button className="task-input__button">add</button>
			</div>
		</div>
	);

}

export default TaskInput