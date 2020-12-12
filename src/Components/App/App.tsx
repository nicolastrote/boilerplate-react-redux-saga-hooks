import React, { FC } from 'react';
import Typography from '@material-ui/core/Typography';

import GridListDisplay from '../GridListDisplay/GridListDisplay';
import './App.scss';

const App: FC = () => {
  return (
    <div className="App">
      <section>
        <Typography variant="h1" gutterBottom>
          Brewery REACT/TypeScript demo
        </Typography>
        <GridListDisplay />
      </section>
    </div>
  );
};

export default App;
