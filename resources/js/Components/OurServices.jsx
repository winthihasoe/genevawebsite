import { Grid, styled, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Item = styled(Box)(({theme})=>({
  backgroundColor: 'Yellow',
  padding: 30,
  borderRadius: '50%',
  textAlign: 'center',
  margin: 'auto',
  width: 120,
  height: 120
}))

export default function OurServices() {
  return (
    <Box sx={{marginBottom: 5}}>
        <Box sx={{margin: 6}} textAlign='center'>
            <Typography variant='h4' gutterBottom sx={{}}>
                OUR SERVICES
            </Typography>
            <Typography variant="overline" display="block" gutterBottom >Managed healthcare service</Typography>
            <Typography paragraph>
                We make efforts to change the way that healthcare services are offered in order to meet the changing needs of our patients, both for the present and future.
            </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          <Grid item lg={3} md={3} sm={4} xs={6}>
            <Item>Child Care</Item>
          </Grid>
          <Grid item lg={3} md={3} sm={4} xs={6}>
            <Item>Elder Care</Item>
          </Grid>
          <Grid item lg={3} md={3} sm={4} xs={6}>
            <Item>Hospitalized Patient Care</Item>
          </Grid>
          <Grid item lg={3} md={3} sm={4} xs={6}>
            <Item>Trip Care Plan</Item>
          </Grid>
        </Grid>
    </Box>
  )
}
