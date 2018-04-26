import PropTypes from 'prop-types';
import React from 'react';
import Styled from './todo.style';
import { FaSquareO, FaCheckSquare } from 'react-icons/lib/fa';

const Todo = ({ onClick, completed, text }) => (
  <Styled onClick={onClick} style={{textDecoration: completed ? 'line-through' : 'none'}}>
    {completed ? <FaCheckSquare /> : <FaSquareO />}
    <span className="todo">{text}</span>
  </Styled>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo;
