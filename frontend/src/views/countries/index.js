// material-ui
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';


// project imports
import { gridSpacing } from 'store/constant';

import CompareCountries from 'components/countries/compare';

// ==============================|| DEFAULT DASHBOARD ||============================== //

function MapSelector() {

  return (
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <CompareCountries />
        </Grid>
      </Grid>
  );
}

export default MapSelector;
