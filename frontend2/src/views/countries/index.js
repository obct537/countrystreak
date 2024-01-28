// import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';

// project imports
import { gridSpacing } from 'store/constant';

import Worldmap from 'ui-component/worldmap';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Countries = () => {
  // const [isLoading, setLoading] = useState(true);
  // useEffect(() => {
  //   setLoading(false);
  // }, []);

  var thing = () => {
    console.log('painis');
  }

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Box sx={{ minHeight: 500 }}>
          <Worldmap componentDidMount={thing()} />
        </Box>
      </Grid>
      {/* <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <EarningCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <TotalOrderLineChartCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalIncomeDarkCard isLoading={isLoading} />
              </Grid>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalIncomeLightCard isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={8}>
            <TotalGrowthBarChart isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} md={4}>
            <PopularCard isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid> */}
    </Grid>
  );
};

export default Countries;
