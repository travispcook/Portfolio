import styled, { css } from 'styled-components';

export default styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: #646464;
  border: 2px solid #93C83E;

  ${props => props.primary && css`
    background: #93C83E;
    color: white;
  `}
`;
