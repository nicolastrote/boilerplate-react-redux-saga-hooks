import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';

import GridListDisplay from '../../Components/GridListDisplay/GridListDisplay';
import { getBreweryList } from '../../Store/BreweryStore/actions';
import Spinner from '../../Components/Spinner/Spinner';

import './App.scss';

const App = (): JSX.Element => {
  const dispatch = useDispatch();
  const breweryList = useSelector((state) => state.root.breweryList);
  const breweryListLoading = useSelector((state) => state.root.loading);
  console.log('useSelector breweryList', breweryList);

  useEffect(() => {
    dispatch(getBreweryList());
  }, []);

  return (
    <div className="App">
      <section>
        <Typography variant="h1" gutterBottom>
          Brewery REACT/TypeScript demo
        </Typography>
        {breweryListLoading ? <Spinner /> : <GridListDisplay breweryList={breweryList} />}
      </section>
    </div>
  );
};

export default App;
