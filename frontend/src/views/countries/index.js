import { useEffect, useState, useMemo } from 'react';

// material-ui
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';

// project imports
import { gridSpacing } from 'store/constant';

import Worldmap from 'ui-component/worldmap';
import CountryList  from 'ui-component/countryList';
import CountryService from 'services/CountryService';
import CompareCountries from 'ui-component/compareCountries';

// ==============================|| DEFAULT DASHBOARD ||============================== //

function MapSelector() {
  const [countries, setCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);

  const alphaList = useMemo(() => {
    let out = {}
    for( let i in countries ) {
      let country = countries[i];
      out[country.alpha2code] = country.name;
    }
    return out;
  }, [countries])

  function removeCountry(id) {
    let selected = selectedCountries.slice();
    const result = selected.filter((item) => item !== id)
    setSelectedCountries(result);
  }

  function addCountry(id) {

    console.log(id);
    // Only add valid countries...
    if( alphaList[id] != undefined ) {

      // ... and only if they're not already added
      if( selectedCountries.indexOf(alphaList[id]) >= 0 )  { return; }
      let countries = selectedCountries.slice();
      countries.push(alphaList[id])
      setSelectedCountries(countries);
    }
  }

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const countriesData = await CountryService.getAllCountries();
        setCountries(countriesData);
      } catch (error) {
        // Handle error
      }
    };

    fetchCountries();
  }, []);


  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Box sx={{ minHeight: 500 }}>
          <Worldmap selectedCountries={selectedCountries} countries={countries} addCountry={addCountry}/>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <CountryList selectedCountries={selectedCountries} remove={removeCountry}/>
      </Grid>
      <Grid item xs={12}>
        <CompareCountries />
      </Grid>
    </Grid>
  );
}

export default MapSelector;
