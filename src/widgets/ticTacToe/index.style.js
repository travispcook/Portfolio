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
`;
