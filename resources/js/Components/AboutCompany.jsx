import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

export default function AboutCompany() {
  return (
        <>
        <Box sx={{paddingTop: 8, paddingBottom: 8}} id="about">
            <Box sx={{margin: 1}} textAlign='center'>
                <Typography variant='overline' gutterBottom>
                    about company
                </Typography>
                <Typography variant="h4" display="block" gutterBottom >Redefining the modern caregiving industry</Typography>
            </Box>
            <Grid container spacing={4}>
                <Grid item lg={4} md={4} sm={6} xs={12} >
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="140"
                            image="/images/cover.jpg"
                            alt="green iguana"
                            sx={{padding: 2}}
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Mission and Vision
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Our mission is to help people in need with best quality services.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            More Details >>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item lg={4} md={4} sm={6} xs={12}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="140"
                            image="/images/cover.jpg"
                            alt="green iguana"
                            sx={{padding: 2}}
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                               Our Challenges
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                               It's hard but we'll try to keep up with the latest technologies and trends.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            More Details >>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item lg={4} md={4} sm={6} xs={12}>
                    <Card sx={{ maxWidth: 345}}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="140"
                            image="/images/cover.jpg"
                            alt="green iguana"
                            sx={{padding: 2}}
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Our Staff
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                We've formed a group of experienced, professional and young experts.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            More Details >>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            </Box>
        </>
  )
}
