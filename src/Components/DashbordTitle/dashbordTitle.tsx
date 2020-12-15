import React, { FC } from 'react';
import Typography from '@material-ui/core/Typography';

import HomeIcon from '../HomeIcon/homeIcon';

import './dashbordTitle.scss';

const DashbordTitle: FC = () => {
  return (
    <div className="dashbord-title">
      <Typography variant="h1" gutterBottom>
        Brewery React Demo <HomeIcon />
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        A web app to exercise on react, typescript, eslint, prettier, redux, hooks, saga ...
      </Typography>
    </div>
  );
};

export default DashbordTitle;
