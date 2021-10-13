import React from 'react';
import {Typography } from '@material-ui/core';

const Header = ({title}) => {
  return (
        <Typography variant="h4">
          {title}
        </Typography>
  );
};

export default Header;