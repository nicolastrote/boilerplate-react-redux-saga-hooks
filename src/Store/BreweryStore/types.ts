import { IBrewery } from '../../Types/brewery';

export interface BreweryState {
  loading: boolean;
  breweryList: IBrewery[];
}
