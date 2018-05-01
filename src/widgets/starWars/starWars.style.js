import styled from 'styled-components';
import img from '../../images/stars.png';

export default styled.div`
  &.star-wars {
    background: #000 url(${img}) no-repeat center;
    background-size: cover;
    padding: 5px 0;

    h1 {
      color: #FFF;
    }
  }
`;
