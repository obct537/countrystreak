import { useState } from 'react';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ReactCountryFlag from 'react-country-flag';
import { Typography, Box } from '@mui/material';
import Popover from '@mui/material/Popover';

export function LaneHeader(props) {
    const [anchorEl, setAnchorEl] = useState(null);
  
    const {country, countryName, ...other} = props;

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return ( 
      <Box sx={{ display: 'flex',  padding: '.25em 0 .25em .5em', alignItems: 'center' }}>
        <Box className="flagIcon">
          <ZoomInIcon />
          <ReactCountryFlag onClick={handleClick} countryCode={country} style={{ fontSize: '4em', cursor: 'pointer' }} />
        </Box>
        <Typography variant="h3" sx={{ paddingLeft: '.5em', overflow: 'hidden', whiteSpace: 'nowrap' }}>{countryName}</Typography>
        <Popover id={id} open={open} anchorEl={anchorEl} 
          onClose={handleClose} 
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          transformOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
          <Box sx={{ 
            bgcolor: 'background.paper', 
            padding: '0 1em',
            overflow: 'hidden'}}>
            <ReactCountryFlag countryCode={country} style={{ fontSize: '25em' }} />
          </Box>
        </Popover>
      </Box>
    )
}