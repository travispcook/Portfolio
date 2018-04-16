import Game from './ticTacToe/index';
import React from 'react';
import ReactDOM from 'react-dom';
import Styled from './index.style';

class Main extends React.Component {
  render() {
    return(
      <Styled>
        <div className="main-title">
          <h1>Travis Cook</h1>
          <h4>Pretty Decent Coder</h4>
          <h4>See the code hosted at <a href="https://github.com/travispcook/Portfolio">GitHub</a></h4>
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
