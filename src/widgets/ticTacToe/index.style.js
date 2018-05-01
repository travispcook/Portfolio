import styled from 'styled-components';

export default styled.div`
  &.game {
    padding: 10px;
    h1 {
      text-align: center;
    }

    .game-board {
      flex: 1;
      display: flex;
      justify-content: center;
      & > div {
        display: flex;
        flex-direction: column;
      }
    }

    .game-info {
      flex: 1;
      flex-direction: column;
      display: flex;
      align-items: center;
    }
  }

  .board-row {
    width: 147px;
  }

  .board-row:after {
    clear: both;
    content: "";
    display: table;
  }

  .status {
    margin-bottom: 10px;
  }

  .square {
    background: #fff;
    border: 1px solid #999;
    float: left;
    font-size: 30px;
    font-weight: bold;
    line-height: 50px;
    height: 50px;
    margin-right: -1px;
    margin-top: -1px;
    padding: 0;
    text-align: center;
    width: 50px;
  }

  .square:focus {
    outline: none;
  }

  .kbd-navigation .square:focus {
    background: #ddd;
  }
`;
