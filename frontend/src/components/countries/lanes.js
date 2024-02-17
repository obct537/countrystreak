import Grid from '@mui/material/Grid';

import { useContext } from 'react';
import { CountryContext } from 'components/countries/context';


const CountryLanes = () => {

  const context = useContext(CountryContext);

  return (
    <Grid container spacing={2}>
      { context.selectedCountries.map(i => 
        <Grid key={i} item>
          { i }
        </Grid>
      )}
    </Grid>
  );
};

export default CountryLanes;