import React from 'react';
import Proptypes from 'prop-types';
import Styled from './button.style'

class Button extends React.Component {
  render() {
    return(
      <Styled primary disabled={this.props.disabled} style={this.props.style} onClick={() => this.props.onClick()} type={this.props.type}>{this.props.content}</Styled>
    );
  }
}

Button.Proptypes = {
  content: Proptypes.string,
  disabled: Proptypes.bool,
  onClick: Proptypes.func,
  style: Proptypes.string,
  type: Proptypes.string
}

Button.defaultProps = {
  onClick: () => {}
}

export default Button;
