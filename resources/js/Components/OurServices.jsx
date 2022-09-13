import { Link } from '@inertiajs/inertia-react'
import { Card, CardActionArea, CardMedia, Grid, styled, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Item = styled(Box)(({theme})=>({
  backgroundColor: '#FBF8F1',
  padding: 30,
  borderRadius: '50%',
  textAlign: 'center',
  margin: 'auto',
  width: 180,
  height: 180,
  overflow: 'hidden'
}))

export default function OurServices() {
  return (
    <Box sx={{marginBottom: 5, paddingTop: 8, paddingBottom: 8}} id='service'>
        <Box textAlign='center' gutterBottom>
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
            <Link href='/child-care'>
              <Item>
                <CardMedia
                        component="img"
                        sx={{
                          maxWidth: '70%',
                          height: 'auto',
                          margin: 'auto',
                        }}
                        image={'/images/services/child_care.png'}
                        alt='child care'
                /> 
                <Typography component='div' variant='h6'>
                  Child Care
                </Typography>
              </Item>
            </Link>
          </Grid>
          <Grid item lg={3} md={3} sm={4} xs={6}>
          <Link href='/choose-caregiver'>
            <Item>
              <CardMedia
                    component="img"
                    sx={{
                      maxWidth: '70%',
                      height: 'auto',
                      margin: 'auto',
                    }}
                    image={'/images/services/elder_care.png'}
                    alt='elder care'
            /> 
            <Typography component='div' variant='h6'>
              Elder Care
            </Typography>
            </Item>
          </Link>
          </Grid>
          <Grid item lg={3} md={3} sm={4} xs={6}>
            <Link href='/choose-caregiver'>
            <Item>
            <CardMedia
                    component="img"
                    sx={{
                      maxWidth: '70%',
                      height: 'auto',
                      margin: 'auto',
                    }}
                    image={'/images/services/hospital_care.png'}
                    alt='hospital care'
            /> 
            <Typography component='div' variant='h6'>
              Hospitalized Care
            </Typography>
            </Item>
            </Link>
          </Grid>
          <Grid item lg={3} md={3} sm={4} xs={6}>
            <Link href='/choose-caregiver'>
            <Item>
            <CardMedia
                    component="img"
                    sx={{
                      maxWidth: '70%',
                      height: 'auto',
                      margin: 'auto',
                    }}
                    image={'/images/services/trip_care.png'}
                    alt='trip care'
            /> 
            <Typography component='div' variant='h6'>
              Trip Care Plan
            </Typography>
            </Item>
            </Link>
          </Grid>
        </Grid>
    </Box>
  )
}
