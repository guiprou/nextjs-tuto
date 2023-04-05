import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 3px 0;
  background-color: white;
`;

const Item = styled.li`
  list-style: none;
  padding: 6px 8px;
  &:not(:last-child) {
    border-bottom: 1px solid #ccc;
  }
`;

const DeleteBtn = styled.button`
  margin-left: 5px;
  padding: 2px;
`;

const EmptyList = styled.li`
  list-style: none;
  font-style: italic;
  padding: 6px 8px;
`;

const TodoList = ({ todos, deleteTodo}) => (
  <List>
    {todos.map((todo) => (
      <Item key={todo.id}>
        <span>{todo.text}</span>
        <DeleteBtn onClick={() => deleteTodo(todo.id)}>Delete</DeleteBtn>
      </Item>
    ))}
    {!todos.length && <EmptyList>No Items in the list...</EmptyList>}
  </List>
);
 
export default TodoList;