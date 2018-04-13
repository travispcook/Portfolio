import React from 'react';
import Proptypes from 'prop-types';
import Styled from './button.style'

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Styled primary onClick={() => this.props.onClick()}>{this.props.content}</Styled>
    );
  }
}

Button.Proptypes = {
  content: Proptypes.string,
  onClick: Proptypes.func,
}

Button.defaultProps = {
  onClick: () => {}
}

export default Button;
