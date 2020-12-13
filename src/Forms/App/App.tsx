import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';

import GridListDisplay from '../../Components/GridListDisplay/GridListDisplay';
import './App.scss';

// eslint-disable-next-line no-undef
const App = (): JSX.Element => {
  const breweryList = useSelector((state) => state.root.breweryList);
  console.log('useSelector breweryList', breweryList);

  const dispatch = useDispatch();

  // TODO : move this to action file
  const getBreweryList = () => {
    dispatch({
      type: 'GET_BREWERY_LIST',
    });
  };

  useEffect(() => {
    getBreweryList();
  }, []);

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
