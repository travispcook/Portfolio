import Game from './ticTacToe/index';
import React from 'react';
import ReactDOM from 'react-dom';
import Styled from './index.style';
import Title from './title/index';

class Main extends React.Component {
  render() {
    return(
      <Styled>
        <div className="main-title">
          <h1>Travis Cook</h1>
          <h4>Coder Extraordinaire</h4>
          <h4>Link to code hosted in <a href="https://github.com/travispcook/Portfolio">GitHub</a></h4>
        </div>
        <Game />
      </Styled>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
