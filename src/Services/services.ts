/* eslint-disable no-console */
import axios from 'axios';

import { IBrewery } from '../Types/brewery';

export async function fetchAPI(request: string): Promise<IBrewery[]> {
  return axios
    .get(request)
    .then((data) => {
      console.info('axios call :', data.data);

      return data.data;
    })
    .catch((error) => console.error('axios error :', error));
}
