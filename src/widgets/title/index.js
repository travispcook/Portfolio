import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { FaGithubSquare } from 'react-icons/lib/fa';

class Title extends React.Component{
  render() {
    return(
      <div className="main-title">
        <Grid fluid>
          <Row center="xs" middle="xs">
            <Col xs={8}>
              <h1>Travis Cook</h1>
              <h4>Pretty Decent Coder</h4>
              <h4>See the code hosted at <a href="https://github.com/travispcook/Portfolio"><FaGithubSquare /></a></h4>
            </Col>
            <Col xs={4}>
              <img className="profile-img" src={require('../../images/beardy.jpg')} alt="profile pic" />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Title;
