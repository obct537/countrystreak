// CountryService.js
import axios from 'axios';
import useSWR, { mutate } from 'swr';

const API_BASE_URL = '/api/countries';

const fetcher = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
}

const CountryService = () => {

}

const GetCountries = () => {
  const { data, error } = useSWR(API_BASE_URL, fetcher);

  if(!data) return [];
  if(error) {
    console.error(`Error while fetching countries: ${error}`);
    return [];
  }

  return data;
}

export {CountryService, GetCountries};