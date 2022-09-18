import React from 'react'
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'

export default function OurCommitment() {
  return (
    <>
        <Box sx={{margin: 6}}>
            <Box sx={{margin: 1}} textAlign='center'>
                <Typography variant='overline' gutterBottom sx={{}}>
                    our commitment
                </Typography>
                <Typography variant="h4" display="block" gutterBottom >Reason why you should choose us</Typography>
                <Typography paragraph>
                  We make efforts to change the way that healthcare services are offered in order to meet the cahnging needs of our patients, both for the present and future.
                </Typography>
            </Box>
            <Grid container spacing={4}>
                <Grid item lg={4} md={4} sm={6} xs={12} >
                <Card sx={{ maxWidth: 345, backgroundColor: 'transparent', border: '1px solid #256D85' }}>
                        <CardActionArea>
                            <CardMedia height='120' sx={{padding: 5}}>
                             
                            </CardMedia>
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Experienced Experts
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Get the best services from experienced experts in caregiving industry.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item lg={4} md={4} sm={6} xs={12}>
                    <Card sx={{ maxWidth: 345, backgroundColor: 'transparent', border: '1px solid #256D85' }}>
                        <CardActionArea>
                            <CardMedia height='120' sx={{padding: 5}}>
                             
                            </CardMedia>
                            
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                               On-time Delivery
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                               We set accruate schedules and follow closely to achieve efficiency.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        
                    </Card>
                </Grid>
                <Grid item lg={4} md={4} sm={6} xs={12}>
                <Card sx={{ maxWidth: 345, backgroundColor: 'transparent', border: '1px solid #256D85' }}>
                        <CardActionArea>
                            <CardMedia height='120' sx={{padding: 5}}>
                             
                            </CardMedia>
                            
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Affordable Prices
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                We charge based on the conditions, needs and budgets of customers.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        
                    </Card>
                </Grid>
            </Grid>
          </Box>
    </>
  )
}
