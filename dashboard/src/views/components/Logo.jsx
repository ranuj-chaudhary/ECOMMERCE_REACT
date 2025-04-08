import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ className }) => {
  return (
    <div className={`${className}`}>
      <Link to="/">
        <img
          src="/images/logo.png"
          alt="Logo"
          className="w-full h-full object-contain"
        />
      </Link>
    </div>
  );
};

export default Logo;
