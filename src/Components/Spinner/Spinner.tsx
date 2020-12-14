import React, { FC } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import './Spinner.scss';

const Spinner: FC = () => {
  return (
    <div className="spinner">
      <div>Application is fetching data</div>
      <CircularProgress />
    </div>
  );
};

export default Spinner;
