import styled from 'styled-components';

export default styled.div`
  &.pagination {
    display: flex;
    justify-content: center;
    .number-row {
      display: flex;
      margin: 0 2px;
      span {
        color: white;
        padding: 2px 6px;
        margin: 0px 1px;
        border: 1px solid #646464;
        border-radius: 3px;
        background-color: rgba(245, 245, 245, 0.25);
        cursor: pointer;
        &.active {
          background-color: rgba(245, 245, 245, 1);
          color: #646464;
        }
      }
    }
  }
`;
