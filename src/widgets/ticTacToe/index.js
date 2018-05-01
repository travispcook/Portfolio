import Board from './board';
import React from 'react';
import Styled from './index.style';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      isXNext: true,
      stepNumber: 0,
    };
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      isXNext: (step % 2) === 0
    });
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.isXNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {squares: squares}
      ]),
      stepNumber: history.length,
      isXNext: !this.state.isXNext
    });
  }

  handleReset() {
    this.setState({
      history: [{
        squares: Array(9).fill(null),
      }],
      isXNext: true,
      stepNumber: 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = this.calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.isXNext ? "X" : "O");
    }

    return (
      <Styled className="game">
        <h1>Tic Tac Toe</h1>
        <Grid fluid>
          <Row center="xs" middle="xs">
            <Col xs={6}>
              <div className="game-board">
                <Board squares={current.squares} onClick={(i) => this.handleClick(i)} clickReset={() => this.handleReset()}/>
              </div>
            </Col>
            <Col xs={6}>
              <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
              </div>
            </Col>
          </Row>
        </Grid>
      </Styled>
    );
  }
}

export default Game;
