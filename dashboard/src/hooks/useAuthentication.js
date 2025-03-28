import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useAuthentication = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return isAuthenticated;
};

export default useAuthentication;
