import { PaddedBox, FullDivider, LabelText } from './displayElements';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

export function DetailView(props) {
  const {country, leftRight, ...rest} = props;


    return (
      <Box>
        <PaddedBox>
          <LabelText>Driving side</LabelText>
          <Typography>{leftRight}</Typography>
        </PaddedBox>
        <FullDivider />
        <PaddedBox>
          <LabelText>Domain name</LabelText>
          <Typography>{country.domain}</Typography>
        </PaddedBox>
        <FullDivider />
        <PaddedBox>
          <LabelText>Alpha codes</LabelText>
          <Typography>{country.alpha2code} | {country.alpha3code}</Typography>
        </PaddedBox>
      </Box>
    )
}