import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

function BoxGrid() {
  return (
    <Box sx={{ flexGrow: 1, padding: 4 }}>
      <Grid container spacing={2}>
        {/* First Box */}
        <Grid item xs={12} sm={6} md={3}>
          <Box 
            sx={{ 
              padding: 2, 
              backgroundColor: '#f5f5f5', 
              textAlign: 'center', 
              borderRadius: 2, 
              boxShadow: 2 
            }}
          >
            <Typography variant="h6">$529908</Typography>
            <Typography variant="body1">Earnings of Month</Typography>
          </Box>
        </Grid>

        {/* Second Box */}
        <Grid item xs={12} sm={6} md={3}>
          <Box 
            sx={{ 
              padding: 2, 
              backgroundColor: '#e0f7fa', 
              textAlign: 'center', 
              borderRadius: 2, 
              boxShadow: 2 
            }}
          >
            <Typography variant="h6">$526</Typography>
            <Typography variant="body1">New Projects</Typography>
          </Box>
        </Grid>

        {/* Third Box */}
        <Grid item xs={12} sm={6} md={3}>
          <Box 
            sx={{ 
              padding: 2, 
              backgroundColor: '#fff9c4', 
              textAlign: 'center', 
              borderRadius: 2, 
              boxShadow: 2 
            }}
          >
            <Typography variant="h6">$59</Typography>
            <Typography variant="body1">New Clients</Typography>
          </Box>
        </Grid>

        {/* Fourth Box */}
        <Grid item xs={12} sm={6} md={3}>
          <Box 
            sx={{ 
              padding: 2, 
              backgroundColor: '#ffccbc', 
              textAlign: 'center', 
              borderRadius: 2, 
              boxShadow: 2 
            }}
          >
            <Typography variant="h6">$520</Typography>
            <Typography variant="body1">Projects</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BoxGrid;
