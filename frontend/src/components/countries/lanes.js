import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { Paper } from '@mui/material';
import { useContext } from 'react';
import { CountryContext } from 'components/countries/context';
import { DetailView } from './details';
import { BollardView } from './bollardView';
import { FullDivider } from './displayElements';
import { LaneHeader } from './laneHeader';

function CountryLane(context, i, view) {
  const country = context.getCountryObject(i);

  if (!country) {
    return <></>;
  }

  let leftRight = country.leftOrRight == 'R' ? 'Right' : 'Left';

  const SelectedView = (props) => {
    switch(props.view) {
      case 'details':
        return <DetailView country={country} leftRight={leftRight}/>
      case 'bollards':
        return <BollardView country={country}/>
    }
  }

  return (
    <Grid key={i} item xs={12} sm={6} md={6} lg={6} xl={3} sx={{ height: '100%' }}>
      <Paper elevation={2}>
        <IconButton sx={{ float: 'right' }} onClick={() => context.removeSelectedCountry(i)}>
          <CancelOutlinedIcon />
        </IconButton>
        <LaneHeader country={country.alpha2code} countryName={country.name}/>
        <FullDivider />
        <Box sx={{ flexWrap: 'wrap' }}>
          <SelectedView view={view} />
        </Box>
      </Paper>
    </Grid>
  );
}

const CountryLanes = (props) => {
  const {view, ...rest} = props;
  const context = useContext(CountryContext);

  return (
    <Box sx={{ flexDirection: 'row', margin: 3 }}>
      <Grid container spacing={2}>
        {context.selectedCountries.map((i) => CountryLane(context, i, view))}
      </Grid>
    </Box>
  );
};

export default CountryLanes;
