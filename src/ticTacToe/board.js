import Button from '../components/button/index';
import React from 'react';
import Square from './square';

class Board extends React.Component {

  renderSquare(i) {
    return (
      <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)}/>
    );
  }

  handleClick() {
    this.props.clickReset();
  }

  render() {
    return (
      <div>
        <h4>Wanna Play a Game?</h4>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <br/>
        <Button onClick={() => this.handleClick()} content={"Reset"}/>
      </div>
    );
  }
}

export default Board;
