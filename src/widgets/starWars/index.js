import Card from '../../components/card/index';
import React from 'react';
import { isNil } from 'lodash';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { FaSpinner } from 'react-icons/lib/fa';

class StarWars extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePage: 1,
      isLoaded: false,
      people: []
    }
  }

  componentDidMount() {
    this.fetchPeople(this.state.activePage);
  }

  fetchPeople(page) {
    fetch("https://swapi.co/api/people/?page=" + this.state.activePage)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
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

  renderSquares() {
    if(isNil(this.state.people) && !this.state.isLoaded) { return <FaSpinner />; }
    let starPeeps = [];
    this.state.people.forEach((person, index) => {
      const cardProps = {
        cardTitle: person.name,
        imgSrc: 'https://starwars-visualguide.com/assets/img/characters/' + (index + 1) + '.jpg',
        subTitle: person.gender
      }
      starPeeps.push(<Col key={index} xs={4}><Card {...cardProps}/></Col>);
    });
    return(starPeeps);
  }

  render() {
    console.log(this.state.people);
    return(
      <div>
        <h1>Star Wars</h1>
        <Grid fluid>
          <Row center="xs">
            {this.renderSquares()}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default StarWars;
