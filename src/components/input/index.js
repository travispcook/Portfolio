import propTypes from 'prop-types';
import React from 'react';
import Styled from './index.style';

class Input extends React.Component {
  handleChange(event) {
    this.props.onChange(event);
  }

  render() {
    const inputProps = {
      disabled: this.props.disabled,
      name: this.props.inputName,
      onChange: (e) => this.handleChange(e),
      ref: this.props.refHook,
      type: this.props.inputType,
      value: this.props.value
    }
    return(
      <Styled>
        <input {...inputProps} />
      </Styled>
    );
  }
}

Input.propTypes = {
  disabled: propTypes.bool,
  inputName: propTypes.string,
  inputType: propTypes.string,
  onChange: propTypes.func,
  ref: propTypes.func,
  value: propTypes.string
}

Input.defaultProps = {
  onChange: () => {},
  ref: () => {}
}

export default Input;
