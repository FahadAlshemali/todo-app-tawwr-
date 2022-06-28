const Task = ({tasks}) => {
	return (
		<div className='list' key={task.id}>
			<li className={task.complete ? 'line-through' : ''}>{task.text}</li>
			<button onClick={() => checkDone(task.id)}>
				{task.complete ? 'uncheck' : 'check'}
			</button>
			<button onClick={() => removeTask(task.id)}>remove</button>
		</div>
	);
};

export default Task;
