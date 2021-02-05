import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Divider } from '@material-ui/core';

import { getBreweryList } from '../../Store/BreweryStore/actions';
import GridListDisplay from '../../Components/GridListDisplay/GridListDisplay';
import Spinner from '../../Components/Spinner/Spinner';
import DashboardTitle from '../../Components/DashbordTitle/dashboardTitle';
import { RootState } from '../../Store/types';
import { IBrewery } from '../../Types/brewery';

const App: FC = () => {
  const dispatch = useDispatch();
  const breweryList = useSelector((state: RootState) => state.root.breweryList);
  const breweryListLoading = useSelector((state: RootState) => state.root.loading);

  useEffect(() => {
    dispatch(getBreweryList());
  }, []);

  const breweryListRender = (display: boolean, list: IBrewery[]): JSX.Element =>
    display ? <Spinner /> : <GridListDisplay breweryList={list} />;

  return (
    <div>
      <DashboardTitle />
      <Divider />
      {breweryListRender(breweryListLoading, breweryList)}
    </div>
  );
};

export default App;
