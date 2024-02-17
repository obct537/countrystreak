import { useEffect, useContext } from 'react';

// material-ui
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';

// project imports
import { gridSpacing } from 'store/constant';

import Worldmap from 'components/worldmap';
import CountryList  from 'components/countries/list';
import CompareCountries from 'components/countries/compare';
import { CountryProvider, CountryContext } from 'components/countries/context';

// ==============================|| DEFAULT DASHBOARD ||============================== //

function MapSelector() {

  return (
    <CountryProvider>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Box sx={{ minHeight: 500 }}>
            <Worldmap />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <CountryList />
        </Grid>
        <Grid item xs={12}>
          <CompareCountries />
        </Grid>
      </Grid>
    </CountryProvider>
  );
}

export default MapSelector;
