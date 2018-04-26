import Game from './widgets/ticTacToe/index';
import React from 'react';
import ReactDOM from 'react-dom';
import StarWars from './widgets/starWars/index';
import Styled from './index.style';
import Title from './widgets/title/index';
import TodoApp from './widgets/todo/index';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Main extends React.Component {
  render() {
    return(
      <Styled>
        <Title />
        <Game />
        <Grid fluid>
          <Row center="xs" middle="xs">
            <Col xs>
              <TodoApp />
            </Col>
          </Row>
          <Row center="xs" middle="xs">
            <Col xs>
              <StarWars />
            </Col>
          </Row>
        </Grid>
      </Styled>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
