import React from 'react';

const Success = ({ message }) => {
  return (
    <div className="my-2">
      <p className={`text-green-300  ${message ? '' : 'invisible'}`}>
        *{message}
      </p>
    </div>
  );
};

export default Success;
