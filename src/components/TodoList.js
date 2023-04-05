import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
  list-style: none;
`;

const TodoList = ({ todos, deleteTodo}) => (
  <ul>
    {todos.map((todo) => (
      <Item key={todo.id}>
        <span>{todo.text}</span>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </Item>
    ))}
  </ul>
);
 
export default TodoList;