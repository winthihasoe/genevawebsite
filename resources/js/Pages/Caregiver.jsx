import { Head, Link } from '@inertiajs/inertia-react';
import { Paper, Typography, Box, Grid, Chip, Divider, Button } from '@mui/material'
import { Stack } from '@mui/system';
import React from 'react'


export default function Caregiver({caregiver, care}) {
  return (
    <>
    <Head title={`${caregiver.name}`} />
        <Box maxWidth='md' sx={{ padding: 2, margin: 'auto'}}>
            <Paper elevation={16} sx={{ padding: 5 }}>
               
                <Typography variant='h6' gutterBottom>
                    Name: {caregiver.name}
                </Typography>
            

                <Box sx={{marginBottom: 2}}>
                    <Chip color='error' label={`${caregiver.level} level`} />
                </Box>

                <Typography gutterBottom>
                    <b>Skill:</b> 
                </Typography>

                <Stack direction={{xs: 'column', sm: 'row', md: 'row'}} spacing={1} sx={{marginBottom:2}}>
                    {caregiver.skills.map(skill=>(
                        <Chip label={skill} />
                    ))}
                </Stack>
                    
                <Typography paragraph gutterBottom>
                    <b>Field of care: {caregiver.care === 'elder' ? 'Elder Care' : ''} {caregiver.care === 'child' ? 'Child Care' : ''} {caregiver.care === 'elder_child' ? 'Elder Care & Child Care' : ''} </b>
                </Typography>

                {/* Add some experience about this caregiver  */}
                <Box sx={{ border: "1px dotted #000", padding: 2, borderRadius: 2, marginBottom: 2}}>
                    <Typography paragraph>Experience is coming soon...</Typography>
                </Box>

                <Divider />

                <Box sx={{marginTop: 2, marginBottom: 2}}>
                    <Typography variant='h6'>{caregiver.name}'s information</Typography>
                </Box>
                <Grid container spacing={3}>
                    <Grid item md={6}>
                        height: {caregiver.height} ft
                    </Grid>
                    <Grid item md={6}>
                        weight: {caregiver.weight} lb
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item md={6}>
                        <i>
                        City cover: {caregiver.location == 'ygn' ? 'Yangon' : ''} {caregiver.location == 'mdy' ? 'Mandalay' : ''} {caregiver.location == 'mkn' ? 'MyitKyina' : ''} city
                        </i>
                    </Grid>
                    <Grid item md={6}>
                        <img src={`/images/profiles/${caregiver.image}`} alt='caregiver'/>
                    </Grid>
                </Grid>
                <Box sx={{ padding: 2, margin: 2}} textAlign='center'>
                    <Link href={route('booking', {'care': care})} as='button' type='button'>
                       Book Now
                    </Link>
                </Box>
            </Paper>
        </Box>
    </>
  )
}
