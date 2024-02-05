// CountryService.js
import axios from 'axios';

const API_BASE_URL = '/api/countries';

const getAllCountries = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching countries:', error);
    throw error;
  }
};

const addCountry = async newCountryName => {
  try {
    const response = await axios.post(API_BASE_URL, { name: newCountryName });
    return response.data;
  } catch (error) {
    console.error('Error adding country:', error);
    throw error;
  }
};

const CountryService = {
  getAllCountries,
  addCountry,
};

export default CountryService;