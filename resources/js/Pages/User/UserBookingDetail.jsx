import EditUserBookingDetail from '@/Components/EditUserBookingDetail';
import UserLayout from '@/Layouts/UserLayout';
import { Head, Link } from '@inertiajs/inertia-react';
import { Container, Divider, Paper, Typography, Box, Chip, Button, Grid } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useState } from 'react'
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';

export default function UserBookingDetail(props) {
  
    const userBooking = props.userBooking;
    const userBookingDetail = props.userBookingDetail;
    const bookedCaregiver = props.bookedCaregiver;
    const [isEditing, setIsEditing] = useState(false);
  return (
    <UserLayout>
      <Head title='Booking detail' />
      <Container maxWidth='xs'>
        <Link href={route('userBookings')}>
            <KeyboardBackspaceRoundedIcon /> <Typography variant='overline'>back</Typography>
        </Link>
      <Paper sx={{ padding: 2}} elevation={10}>
        {isEditing ? (<EditUserBookingDetail userBooking={userBooking} userBookingDetail={userBookingDetail}/>) : 
          (
            <Box sx={{ border: '2px dotted #000', padding: 3 }}>
              <Grid container>
                <Grid item md={8} xs={12}>
                
                    <Typography variant='h6' gutterBottom>
                      My information
                    </Typography>

                    {/* -------------- Patient information ----------------- */}
                      <Typography variant='p' gutterBottom>
                        Patient name: {userBooking.patient_name}
                      </Typography>

                      <Divider />

                      <Typography variant='p' gutterBottom>
                        Patient Age: {userBookingDetail.patient_age}
                      </Typography>

                      <Divider />

                      <Typography variant='p' gutterBottom>
                        Patient Address: {userBooking.address}
                      </Typography>

                      <Divider />

                      <Typography variant='p' gutterBottom>
                        Patient Phone: {userBooking.phone}
                      </Typography>

                      <Divider />

                      { userBookingDetail.note_to_caregiver && <Box>
                        <Typography component='div' gutterBottom>
                          Your note to caregiver : 
                        </Typography>
                        <Typography variant='p' gutterBottom>
                          { userBookingDetail.note_to_caregiver }
                        </Typography>
                        <Divider />
                      </Box>}
                      

                      {/* Patient's needs  */}
                      <Typography variant='p'>You select the following needs</Typography>
                      <Stack direction="column" spacing={1} sx={{marginBottom:2}}>
                          {userBookingDetail.needs.map(topic=>(
                              <Chip label={topic} key={topic}/>
                          ))}
                      </Stack>
                      <Divider />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Box sx={{ maxWidth: 100, margin: 'auto', marginTop: 3}} >
                    <img src={`/images/profiles/${bookedCaregiver.image}`} alt='caregiver'/>
                  </Box>
                </Grid>
              </Grid>
                    {/* -------------- Booked Caregiver information ----------------- */}
                      <Typography variant='h6' gutterBottom>
                        Caregiver information
                      </Typography>

                      <Box sx={{marginBottom: 2}}>
                          You booked a <b>{bookedCaregiver.level} level</b> caregiver.
                      </Box>

                      <Typography variant='p' gutterBottom>
                        Caregiver name: {bookedCaregiver.name}
                      </Typography>
                      <Divider />
                      <Typography variant='p' gutterBottom>
                        Height: {bookedCaregiver.height} ft
                      </Typography>
                      <Divider />

                      <Typography variant='p' gutterBottom>
                        Weight: {bookedCaregiver.weight} lb
                      </Typography>
                      <Divider />

                      <Typography variant='p' gutterBottom>
                        Level: {bookedCaregiver.level}
                      </Typography>
                      <Divider />

                      <Typography variant='p' gutterBottom>
                        Field of Care: {bookedCaregiver.care === 'elder' ? 'Elder Care' : ''} {bookedCaregiver.care === 'child' ? 'Child Care' : ''} {bookedCaregiver.care === 'elder_child' ? 'Elder Care & Child Care' : ''}
                      </Typography>
                      <Divider />

                    {/* -------------- Price calculation ----------------- */}

                      <Box sx={{ margin: 2}} textAlign='center'>
                        <Typography variant='p'>
                          <b>Price {bookedCaregiver.level == 'semi' ? 16000 : ''} {bookedCaregiver.level == 'skilled' ? 20000 : ''} {bookedCaregiver.level == 'advanced' ? 24000 : ''}</b> MMK for 1 duty.
                        </Typography>
                      </Box>

                    {/* -------------- Submit button ----------------- */}
                    <Box sx={{ marginTop: 2}} textAlign='center'>
                        { userBooking.is_duty == false && userBooking.is_complete == false && userBooking.is_cancel == false &&
                          <Button variant='contained' color='secondary' onClick={()=>setIsEditing(true)}>Edit</Button>    
                        }
                        {userBooking.is_duty == true && 
                          <>
                          <Chip label='Our service is starting' color='success' variant='contained'/> <br />
                          <Typography variant='p'>If you want to change any information, please contact to 09970006670.</Typography>
                          </>
                        }
                        {userBooking.is_complete == true && 
                          <>
                          <Chip label='Our service is complete' color='success' variant='contained'/> <br />
                          <Typography variant='p'>Thank you for choosing us and see you next time.</Typography>
                          </>
                        }
                        {userBooking.is_cancel == true && 
                          <>
                          <Chip label='Your booking is cancelled'/> <br />
                          <Typography variant='p'>Sorry for any inconvinence. See you next time.</Typography>
                          </>
                        }
                    </Box>
                
                <Box sx={{ marginTop: 1}} textAlign='center'>
              <Typography variant='p' color='secondary'>Thank you for choosing us.</Typography>
            </Box>
            </Box>  
          )
        }
        
        </Paper>
        
        
      </Container>
    </UserLayout>
  )
}
