import React, { FC } from 'react';
import Typography from '@material-ui/core/Typography';

import HomeIcon from '../HomeIcon/homeIcon';

import './dashbordTitle.scss';

const DashboardTitle: FC = () => {
  return (
    <div className="dashboard-title">
      <Typography variant="h1" gutterBottom>
        Brewery React Demo <HomeIcon />
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        A web app to exercise on react, typescript, eslint, prettier, redux, hooks, saga ...
      </Typography>
    </div>
  );
};

export default DashboardTitle;
