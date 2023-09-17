
import React, { useState } from 'react';


function TodoForm({ onAddTodo }) {
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() === '') return;
    const todo = {
      userId: 1,
      id: Math.random().toString(36).substr(2, 9),
      title: newTodo,
      completed: false,
    };
    onAddTodo(todo);
    setNewTodo('');
  };

  return (
    <div className="todo-form">
      <input
        type="text"
        placeholder="Add a new task..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
}

export default TodoForm;
