import React from 'react';
import { ClipLoader } from 'react-spinners';

const Button = ({
  children,

  type = 'button',
  spinner = false,
  loading = false,
  disabled = false,
  className = '',
  ...props
}) => {
  return (
    <button
      type={type}
      disabled={loading || disabled}
      className={`${className}`}
      {...props}
    >
      {loading && spinner ? (
        <ClipLoader
          color="blue"
          cssOverride={{}}
          size={18}
          speedMultiplier={1}
        />
      ) : null}
      {children}
    </button>
  );
};

export default Button;
