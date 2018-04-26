import AddTodo from '../../containers/addTodo';
import Footer from './footer';
import React from 'react';
import Styled from './app.style';
import VisibleTodoList from '../../containers/visibleTodoList';

const App = () => (
  <Styled>
    <h1>Todo List</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </Styled>
);

export default App;
