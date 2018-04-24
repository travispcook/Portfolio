import styled, { css } from 'styled-components';

export default styled.button`
  border: 2px solid #93C83E;
  border-radius: 3px;
  padding: 2px 5px;
  line-height: 16px;
  font-size: 16px;
  color: #646464;

  ${props => props.primary && css`
    background: #93C83E;
    color: white;
  `}
`;
