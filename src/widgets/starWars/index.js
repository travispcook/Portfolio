import Card from '../../components/card/index';
import Pagination from '../../components/pagination/index';
import React from 'react';
import Styled from './starWars.style';
import { isNil } from 'lodash';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { FaSpinner } from 'react-icons/lib/fa';

class StarWars extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePage: 1,
      count: null,
      isLoaded: false,
      people: []
    }
  }

  componentDidMount() {
    this.fetchPeople(this.state.activePage);
  }

  fetchPeople(page) {
    fetch("https://swapi.co/api/people/?page=" + page)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            count: result.count,
            isLoaded: true,
            people: result.results
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  setPage(page) {
    this.fetchPeople(page);
    this.setState({activePage: page});
  }

  renderSquares() {
    if(isNil(this.state.people) && !this.state.isLoaded) { return <FaSpinner />; }
    let starPeeps = [];
    this.state.people.forEach((person, index) => {
      const personID = person.url.split( '/' ).slice(-2, -1);
      const cardProps = {
        cardTitle: person.name,
        imgSrc: 'https://starwars-visualguide.com/assets/img/characters/' + personID + '.jpg'
      }
      starPeeps.push(<Col key={index} xs={3}><Card {...cardProps}/></Col>);
    });
    return(starPeeps);
  }

  render() {
    const paginationProps = {
      activePage: this.state.activePage,
      count: this.state.count,
      numberSelect: (page) => this.setPage(page), previousPage: (page) => this.setPage(page), nextPage: (page) => this.setPage(page)
    }
    return(
      <Styled className="star-wars">
        <h1>Star Wars</h1>
        <Grid fluid>
          <Row center="xs">
            {this.renderSquares()}
          </Row>
          <Row center="xs">
            <Col xs>
              <Pagination {...paginationProps} />
            </Col>
          </Row>
        </Grid>
      </Styled>
    );
  }
}

export default StarWars;
