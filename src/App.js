import './App.css';
import { useState, useEffect } from 'react';
import TaskInput from './taskInput';
import Filters from './filters';
import TasksList from './tasksList';

// ALL | COMPLETED | NOT_COMPLETED
function App() {
	const [tasks, setTasks] = useState(
		JSON.parse(localStorage.getItem('tasks')) || []
	);
	const [filter, setFilter] = useState('ALL');

	function updateFilter(text) {
		setFilter(text);
	}

	function displayTasks() {
		switch (filter) {
			case 'COMPLETE':
				return tasks.filter(task => task.complete);
			case 'NON_COMPLETE':
				return tasks.filter(task => !task.complete);
			case 'ALL':
			default:
				return tasks;
		}
	}

	const updateTasks = (input) => {
		setTasks(prevTasks => [
			...prevTasks,
			{ text: input, complete: false, id: Math.random() },
		]);
	};

	const checkDone = id => {
		const updatedTasks = tasks.map(task => {
			if (task.id === id) {
				task.complete = !task.complete;
			}
			return task;
		});
		setTasks(updatedTasks);
	};

	const removeTask = id => {
		const updatedTasks = tasks.filter(task => task.id !== id);
		setTasks(updatedTasks);
	};

	const uncheckAll = () => {
		const updatedTasks = tasks.map(task => {
			task.complete = false;
			return task;
		});
		setTasks(updatedTasks);
	};

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}, [tasks]);

	return (
		<div className='App'>
			<TaskInput updateTasks={updateTasks} />
			<Filters updateFilter={updateFilter} uncheckAll={uncheckAll} />
			<TasksList checkDone={checkDone} removeTask={removeTask} tasks={tasks} displayTasks={displayTasks} />
		</div>
	);
}

export default App;
