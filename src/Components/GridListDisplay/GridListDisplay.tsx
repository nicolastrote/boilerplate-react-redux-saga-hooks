import React, { FC, useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import { Alert } from '@material-ui/lab';
import isEmpty from 'lodash/isEmpty';
import { MenuItem } from '@material-ui/core';

import { IBrewery } from '../../Types/brewery';
import { LOCATIONS, ONLY_ALPHANUMERIC_REGEX } from '../../Utils/constants';
import CardDisplay from '../CardDisplay/CardDisplay';

import './GridListDisplay.scss';

interface IProps extends React.HTMLAttributes<HTMLElement> {
  breweryList: IBrewery[];
}

const GridListDisplay: FC<IProps> = (props: IProps) => {
  const { breweryList } = props;
  const [searchInput, setSearchInput] = useState<string>('');
  const [searchSelector, setSearchSelector] = useState<string | undefined>('');
  const [breweryListFiltered, setBreweryListFiltered] = useState<IBrewery[] | null>(null);

  useEffect(() => {
    setBreweryListFiltered(breweryList);
  }, [breweryList]);

  useEffect(() => {
    if (!isEmpty(breweryList) && breweryList !== null) {
      let breweryListFilter: IBrewery[] = breweryList;

      if (searchInput !== '') {
        breweryListFilter = breweryListFilter.filter((brewery: IBrewery) =>
          brewery.name.includes(searchInput),
        );
      }

      if (searchSelector !== '') {
        breweryListFilter = breweryListFilter.filter(
          (brewery: IBrewery) => brewery.city === searchSelector,
        );
      }

      setBreweryListFiltered(breweryListFilter);
    }
  }, [searchInput, searchSelector]);

  if (breweryListFiltered === null) {
    return (
      <div className="progress-massage">
        <div>Application is fetching breweries from openbrewerydb.org</div>
        <CircularProgress className="circular-progress" />
      </div>
    );
  }

  const handleChangeSearchInput = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    e.preventDefault();

    const inputValue = e.target.value.replace(ONLY_ALPHANUMERIC_REGEX, '');
    setSearchInput(inputValue);
  };

  const handleChangeSelector = (event): void => {
    event.preventDefault();
    setSearchSelector(event.target.value);
  };

  return (
    <>
      <div className="search-area">
        <div className="search-input-area">
          <Typography variant="h5" gutterBottom>
            Search:
          </Typography>
          <Input
            id="organism"
            name="search-title"
            type="text"
            placeholder="search brewery by name"
            value={searchInput}
            className="search-input"
            onChange={handleChangeSearchInput}
          />
        </div>

        <div className="search-selector-area">
          <Typography variant="h5" gutterBottom>
            City:
          </Typography>
          <FormControl className="search-selector">
            <Select value={searchSelector} onChange={handleChangeSelector} id="search-by-location">
              <MenuItem value="">
                <em>All</em>
              </MenuItem>
              {LOCATIONS.map((location: string, index: number) => (
                <MenuItem value={location} key={index}>
                  {location}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>

      {breweryListFiltered && (
        <div className="grid-list-display">
          <Grid container spacing={5} style={{ padding: 24 }}>
            {breweryListFiltered.map((brewery: IBrewery, index: number) => (
              <Grid item xs={12} sm={6} lg={4} xl={3} key={index.toString()}>
                <CardDisplay brewery={brewery} />
              </Grid>
            ))}
          </Grid>
        </div>
      )}

      {breweryListFiltered && breweryListFiltered.length === 0 && (
        <Alert severity="warning">Sorry there is no answer for your search...</Alert>
      )}

      {breweryList && breweryList.length === 0 && (
        <Alert severity="warning">Sorry the list is empty...</Alert>
      )}
    </>
  );
};

export default GridListDisplay;
