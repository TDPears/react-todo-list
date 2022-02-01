import React from 'react';

export default function TodoItem({todoItem, toggleTodoItem}) {
    function todoItemClickHandler() {
        toggleTodoItem(todoItem.id)
    }

  return (
  <div>
      <label>
            <input type='checkbox' checked={todoItem.complete} onChange={todoItemClickHandler} />
            {todoItem.name}      
      </label>
  </div>
  )
}
