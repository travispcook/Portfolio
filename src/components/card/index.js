import Proptypes from 'prop-types';
import React from 'react';
import Styled from './card.style';

class Card extends React.Component {

  renderCardTitle() {
    if(this.props.cardTitle === undefined) { return(null); }

    return(
      <div className="card-title">{this.props.cardTitle}</div>
    );
  }

  renderImg() {
    if(this.props.imgSrc === undefined) { return null; }

    return(
      <img alt="card img" src={this.props.imgSrc}/>
    );
  }

  renderSubTitle() {
    if(this.props.subTitle === undefined) { return null; }

    return(
      <div className="sub-title">{this.props.subTitle}</div>
    );
  }

  render() {
    return(
      <Styled className="card">
        {this.renderImg()}
        {this.renderCardTitle()}
        {this.renderSubTitle()}
      </Styled>
    );
  }
}

Card.Proptypes = {
  cardTitle: Proptypes.string,
  imgSrc: Proptypes.string,
  subTitle: Proptypes.string
}

export default Card;
