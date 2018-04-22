import Game from './widgets/ticTacToe/index';
import React from 'react';
import ReactDOM from 'react-dom';
import Styled from './index.style';
import Title from './widgets/title/index';
import TodoApp from './widgets/todo/index';

class Main extends React.Component {
  render() {
    return(
      <Styled>
        <Title />
        <Game />
        <TodoApp />
      </Styled>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
