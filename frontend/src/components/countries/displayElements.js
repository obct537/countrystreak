import { Box, Typography } from "@mui/material";
import Divider from '@mui/material/Divider';

export function PaddedBox(props) {
    return <Box 
      sx={{
        p: 2,
        display: 'flex',
        justifyContent: 'space-between',
        flexBasis: 'auto',
        alignItems: 'baseline'
      }}>{props.children}</Box>;
  }
  
  export function LabelText(props) {
    return (
      <Typography variant="h4" color="primary" sx={{ width: '50%', overflow: 'hidden', whiteSpace: 'nowrap' }}>
        {props.children}
      </Typography>
    );
  }
  
  export function FullDivider() {
    return (<Divider sx={{ width: '100%' }} />);
  }
  
