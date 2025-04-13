import React from 'react';

const Error = ({ error }) => {
  return (
    <div className="my-2">
      <p className={`text-white-700  ${error ? '' : 'invisible'}`}>*{error}</p>
    </div>
  );
};

export default Error;
