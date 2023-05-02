import React from 'react';
import propTypes from 'prop-types';
const Button = ({
  className,
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) => {
  return <button className={className}>{children}</button>;
};

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);
    if (count > 1) {
      return new Error(
        'Only one variation of success, primary, secondary, danger, warning can be selected!'
      );
    }
  },
};

export default Button;
