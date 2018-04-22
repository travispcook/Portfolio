import Button from '../../components/button/index';
import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ active, children, onClick }) => (
  <Button onClick={onClick} disabled={active} content={children} style={{marginLeft: '4px',}}/>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
