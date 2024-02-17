import { useState } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import InfoIcon from '@mui/icons-material/Info';

import CountryLanes from 'components/countries/lanes';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
          </Box>
        )}
      </div>
    );
}
  
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function CompareCountries(props) {
    const[value, setValue] = useState(0);

    function a11yProps(index) {
        return {
          id: `vertical-tab-${index}`,
          'aria-controls': `vertical-tabpanel-${index}`,
        };
      }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper variant="elevation" sx={{ flexGrow: 1, display: 'flex'}}>
            <Tabs
            orientation="vertical"
            variant="scrollable"
            onChange={handleChange}
            value={value}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: 'divider' }}>
                <Tab icon={ <InfoIcon />} iconPosition="start" label="Basic Details" {...a11yProps(0)} />
                <Tab label="Bollards" {...a11yProps(1)} />
                <Tab label="License Plates" {...a11yProps(2)} />
                <Tab label="Road Signs" {...a11yProps(3)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <CountryLanes />
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
            </TabPanel>
        </Paper>
    );
}
export default CompareCountries;