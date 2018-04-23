import Button from '../../components/button/index';
import React from 'react';
import Square from './square';

class Board extends React.Component {

  renderSquare() {
    let squares = [];
    for(let i=0; i<9; i++) {
      squares.push(<Square key={i} value={this.props.squares[i]} onClick={() => this.props.onClick(i)}/>);
    }
    return squares;
  }

  handleClick() {
    this.props.clickReset();
  }

  render() {
    return (
      <div>
        <h4>Wanna Play a Game?</h4>
        <div className="board-row">
          {this.renderSquare()}
        </div>
        <br/>
        <Button onClick={() => this.handleClick()} content={"Start Over"}/>
      </div>
    );
  }
}

export default Board;
