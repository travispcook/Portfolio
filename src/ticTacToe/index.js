import Board from './board';
import React from 'react';
import Styled from './index.style';
import './index.css';

class Game extends React.Component {
  render() {
    return (
      <Styled className="game">
        <div className="game-board">
          <Board />
        </div>
      </Styled>
    );
  }
}

export default Game;
