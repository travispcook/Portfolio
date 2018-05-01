import Button from '../button/index';
import Proptypes from 'prop-types';
import Styled from './pagination.style';
import React from 'react';
import { isNil } from 'lodash';

class Pagination extends React.Component {
  handleNext() {
    let nextPage = this.props.activePage + 1;
    this.props.nextPage(nextPage);
  }

  handlePrevious() {
    let prevPage = this.props.activePage - 1;
    if(prevPage < 1) {
      prevPage = 1;
    }
    this.props.previousPage(prevPage);
  }

  renderNumber() {
    if(isNil(this.props.count)) { return null; }
    const pages = Math.ceil(this.props.count / 10);
    let pageNumbers = [];
    for(let i = 1; i <= pages; i++) {
      const activeClass = (i === this.props.activePage) ? "active" : "";
      pageNumbers.push(
        <span className={activeClass} key={i} onClick={() => this.props.numberSelect(i)}>{i}</span>
      );
    }
    return(pageNumbers);
  }

  render() {
    const pages = Math.ceil(this.props.count / 10);
    const prevDisable = (this.props.activePage === 1) ? true : false;
    const nextDisable = (this.props.activePage === pages) ? true : false;
    return(
      <Styled className="pagination">
        <Button disabled={prevDisable} content="Prev" onClick={() => this.handlePrevious()}/>
        <div className="number-row">
          {this.renderNumber()}
        </div>
        <Button disabled={nextDisable} content="Next" onClick={() => this.handleNext()}/>
      </Styled>
    );
  }
}

Pagination.Proptypes = {
  activePage: Proptypes.string,
  nextPage: Proptypes.func,
  previousPage: Proptypes.func
}

Pagination.defaultProps = {
  nextPage: () => {},
  numberSelect: () => {},
  previousPage: () => {}
}

export default Pagination;
