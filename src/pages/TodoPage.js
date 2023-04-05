import React, { useState } from 'react';
import styled from 'styled-components';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
 
const PageContainer = styled.div`
  padding: 15px;
`;

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  
  const addTodo = (text) => {
    setTodos([...todos, { id: todos.length + 1, text }]);
  };
  
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  
  return (
    <PageContainer>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </PageContainer>
  );
};
 
export default TodoPage;