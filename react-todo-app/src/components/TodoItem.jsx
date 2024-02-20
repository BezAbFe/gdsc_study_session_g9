// src/components/TodoItem.jsx
import React from 'react';

const TodoItem = ({ index, task, removeTask, toggleComplete }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(index)}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={() => removeTask(index)}>Remove</button>
    </li>
  );
};

export default TodoItem;
