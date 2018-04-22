import styled from 'styled-components';

export default styled.div`
  &.game {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
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
