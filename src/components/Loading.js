import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

 const LinearIndeterminate = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>
  );
}
export default LinearIndeterminate