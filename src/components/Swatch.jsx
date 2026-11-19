import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Swatch({ color, large }) {
  return <div className={classNames('swatch', { 'swatch-large': large })} style={{ background: color }} aria-hidden="true" />;
}

Swatch.propTypes = {
  color: PropTypes.string.isRequired,
  large: PropTypes.bool,
};
