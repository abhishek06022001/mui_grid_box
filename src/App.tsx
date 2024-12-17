import React from 'react'
import Box from '@mui/material/Box';
import { Grid, Grid2 } from '@mui/material';

type Props = {}

function App({ }: Props) {
  return (
    <Box component="section" sx={{ p: 2, border: '1px dashed grey', backgroundColor: 'red' }}>
      <Grid2 container>
        <Grid2 size={{ md: 4 }}   >
          <Box  >
            <h1>Hey</h1>
            <Box sx={{ p: 2, backgroundColor: 'pink', height: "600px" }} />
          </Box>
        </Grid2>
        <Grid2 container size={{ md: 8 }} rowSpacing={0} columnSpacing={2} >
          <Grid2 size={{ md: 6 }}>
            <Box sx={{ p: 2, backgroundColor: 'white', height: "200px" }} />
          </Grid2>
          <Grid2 size={{ md: 6 }}>
            <Box sx={{ p: 2, backgroundColor: 'yellow', height: "200px" }} />
          </Grid2>
          <Grid2 size={{ md: 6 }}>
            <Box sx={{ p: 2, backgroundColor: 'brown', height: "200px" }} />
          </Grid2>
          <Grid2 size={{ md: 6 }}>
            <Box sx={{ p: 2, backgroundColor: 'orange', height: "200px" }} />
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  )
}

export default App