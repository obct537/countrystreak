import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

import { Paper, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';

import { useContext } from 'react';
import { CountryContext } from 'components/countries/context';

import { LaneHeader } from './laneHeader';

function PaddedBox(props) {
  return <Box 
    sx={{ 
      p: 2, 
      display: 'flex', 
      justifyContent: 'space-between',
      flexBasis: 'auto',
      alignItems: 'baseline'
    }}>{props.children}</Box>;
}

function LabelText(props) {
  return (
    <Typography variant="h4" color="primary" sx={{ width: '30%' }}>
      {props.children}
    </Typography>
  );
}

function CountryLane(context, i) {
  const country = context.getCountryObject(i);

  if (!country) {
    return <></>;
  }

  let leftRight = country.leftOrRight == 'R' ? 'Right' : 'Left';

  return (
    <Grid key={i} item xs={12} sm={6} md={6} lg={6} xl={3} sx={{ height: '100%' }}>
      <Paper elevation={2}>
        <IconButton sx={{ float: 'right' }} onClick={() => context.removeSelectedCountry(i)}>
          <CancelOutlinedIcon />
        </IconButton>
        <Box sx={{ flexWrap: 'wrap' }}>
          <LaneHeader country={i} countryName={country.name}/>
          <Divider sx={{ width: '100%' }} />
          <PaddedBox>
            <LabelText>Driving side</LabelText>
            <Typography>{leftRight}</Typography>
          </PaddedBox>
          <Box>
            <Divider sx={{ width: '100%' }} />
          </Box>
          <PaddedBox>
            <LabelText>Alpha 2 Code</LabelText>
            <Typography>{country.alpha2code}</Typography>
          </PaddedBox>
          <Box>
            <Divider sx={{ width: '100%' }} />
          </Box>
          <PaddedBox>
            <LabelText>Alpha 3 Code</LabelText>
            <Typography>{country.alpha3code}</Typography>
          </PaddedBox>
        </Box>
      </Paper>
    </Grid>
  );
}

const CountryLanes = () => {
  const context = useContext(CountryContext);

  return (
    <Box sx={{ flexDirection: 'row', margin: 3 }}>
      <Grid container spacing={2}>
        {context.selectedCountries.map((i) => CountryLane(context, i))}
      </Grid>
    </Box>
  );
};

export default CountryLanes;
