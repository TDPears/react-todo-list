import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todoList, toggleTodoItem }) {
  return (
      todoList.map(todoItem => {
          return <TodoItem key={todoItem.id} todoItem = {todoItem} toggleTodoItem = {toggleTodoItem} />
      })
  );
}
