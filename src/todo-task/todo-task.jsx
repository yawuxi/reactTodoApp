import './todo-task.scss'

const TodoTask = () => {
	return (
		<li className="task-list__item">
			<label>
				<input type="checkbox" />
				<span className='task-list__checkbox'></span>
				<p className="task-list__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi architecto veniam deserunt neque pariatur possimus quisquam excepturi illum atque recusandae reiciendis laudantium vitae, cupiditate repellendus doloribus? Minus porro saepe quae consequatur corporis aperiam sed vel! Enim dolore placeat eos quisquam unde, debitis fugiat eius vero consequuntur eum quibusdam saepe repellendus!</p>
				<button className="task-list__remove">Remove</button>
			</label>
		</li>
	)
}

export default TodoTask