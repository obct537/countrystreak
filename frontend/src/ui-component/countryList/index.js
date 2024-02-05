import * as React from 'react';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import { Button, Divider } from '@mui/material';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';

function CountryList({selectedCountries, remove}) {

    if( selectedCountries == undefined || selectedCountries.length < 1 ) {
        return;
    }
    return (
        <Paper variant="elevation" sx={{
            display: 'flex',
            justifyContent: 'left',
            listStyle: 'none'
        }}>
            <Button variant="outlines" startIcon={<FlagCircleIcon />} >
                Selected Countries
            </Button>
            <Divider orientation='vertical' flexItem />
            {  selectedCountries.map(i => 
                <li key={i} style={{margin: '5px'}}>
                    <Chip color="primary" variant="outlined" label={i} onDelete={() => remove(i)}/>
                </li>
            )}
        </Paper>

    );
}
export default CountryList;