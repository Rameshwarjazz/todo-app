
import React, { useState } from 'react';


function TodoItem({ todo, onUpdateTodo, onDeleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(todo.title);

  const handleUpdate = () => {
    const updatedTodo = { ...todo, title: updatedTitle };
    onUpdateTodo(updatedTodo);
    setIsEditing(false);
  };

  return (
    <li className="todo-item">
      <input
  type="checkbox"
  checked={todo.completed}
  onChange={() => {
    const updatedTodo = { ...todo, completed: !todo.completed };
    onUpdateTodo(updatedTodo);
  }}
/>
      {isEditing ? (
        <input
          type="text"
          value={updatedTitle}
          onChange={(e) => setUpdatedTitle(e.target.value)}
        />
      ) : (
        <span>{todo.title}</span>
      )}
      <button onClick={isEditing ? handleUpdate : () => setIsEditing(true)}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
      <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
