import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Divider } from '@material-ui/core';

import { getBreweryList } from '../../Store/BreweryStore/actions';
import GridListDisplay from '../../Components/GridListDisplay/GridListDisplay';
import Spinner from '../../Components/Spinner/Spinner';
import DashboardTitle from '../../Components/DashbordTitle/dashbordTitle';
import { RootState } from '../../Store/types';

import './App.scss';

// eslint-disable-next-line no-undef
const App = (): JSX.Element => {
  const dispatch = useDispatch();
  const breweryList = useSelector((state: RootState) => state.root.breweryList);
  const breweryListLoading = useSelector((state: RootState) => state.root.loading);

  useEffect(() => {
    dispatch(getBreweryList());
  }, []);

  return (
    <section>
      <DashboardTitle />
      <Divider />
      {breweryListLoading ? <Spinner /> : <GridListDisplay breweryList={breweryList} />}
    </section>
  );
};

export default App;
