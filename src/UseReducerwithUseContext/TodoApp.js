import React, { useReducer, useState } from 'react';

const initialState = [];

function reducer(state, action) {
    switch (action.type) {
        case 'add':
            return [...state, { id: Date.now(), text: action.payload, completed: false }];
        case 'remove':
          //  return state.filter(task => task.id !== action.payload);
            return state.filter(state => state.id!==action.payload)
        case 'toggle':
            return state.map(task =>
                task.id === action.payload ? { ...task, completed: !task.completed } : task
            );
        default:
            throw new Error();
    }
}

function TaskManager() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [taskText, setTaskText] = useState('');

    const handleAddTask = () => {
        if (taskText.trim()) {
            dispatch({ type: 'add', payload: taskText });
            setTaskText('');
        }
    };

    return (
        <div>
            <h1>Task Manager</h1>
            <input
                type="text"
                value={taskText}
                onChange={e => setTaskText(e.target.value)}
            />
            <button onClick={handleAddTask}>Add Task</button>
            <ul>
                {state.map(task => (
                    <li key={task.id}>
                        <span
                            style={{
                                textDecoration: task.completed ? 'line-through' : 'none',
                                cursor: 'pointer',
                            }}
                            onClick={() => dispatch({ type: 'toggle', payload: task.id })}
                        >
                            {task.text}
                        </span>
                        <button onClick={() => dispatch({ type: 'remove', payload: task.id })}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskManager;
