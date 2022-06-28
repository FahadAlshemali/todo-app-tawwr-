import { useState } from 'react';
const TaskInput = ({updateTasks}) => {
	const [input, setInput] = useState('');
	return (
		<div>
			<input type='text' onChange={e => setInput(e.target.value)} value={input} />
			<button onClick={() => {
        updateTasks(input);
        setInput('')
      }}>Add</button>
		</div>
	);
};

export default TaskInput;
