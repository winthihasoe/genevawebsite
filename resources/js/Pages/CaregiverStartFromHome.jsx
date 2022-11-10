import UserLayout from '@/Layouts/UserLayout';
import { Head, Link, usePage } from '@inertiajs/inertia-react';
import { Paper, Typography, Box, Grid, Chip, Divider, Button, Modal } from '@mui/material'
import React, { useState } from 'react'
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';



export default function CaregiverStartFromHome({caregiver, patient_info}) {
    const [values, setValues] = useState({
        ...caregiver,
        ...patient_info,
    })
  return (
    <UserLayout>
    <Head title={`${caregiver.name}`} />
        
        <Box maxWidth='md' sx={{ padding: 2, margin: 'auto'}}>
            <Button onClick={()=>history.back()} >
                <KeyboardBackspaceRoundedIcon /> <Typography variant='overline'>back</Typography>
            </Button>
            
            <Paper elevation={16} sx={{ padding: 5 }}>
               
                <Typography variant='h6' gutterBottom>
                    Caregiver name: {caregiver.name}
                </Typography>
            

                <Box sx={{marginBottom: 2}}>
                    <Chip color='error' label={`${caregiver.level} level`} />
                </Box>

                <Typography gutterBottom>
                    <b>{caregiver.name}</b>  can do the following skills:
                </Typography>

                {caregiver.skills.map(skill=>(
                    <Box sx={{ padding: 1, display: 'inline-block'}}>
                        <Chip label={skill} />
                    </Box>
                ))}
                    
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
                { caregiver.is_available ? <Box sx={{ padding: 2, marginTop: 2}} textAlign='center'>
                    <Link href={route('finishBooking',  {values})} as='button' type='button'>
                       Book Now
                    </Link>
                </Box>: <Box textAlign='center'>Caregiver is on duty is now. You can book when the caregiver is available.</Box> }
                
            </Paper>
            
        </Box>
    </UserLayout>
  )
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
  };
