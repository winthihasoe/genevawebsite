import UserLayout from '@/Layouts/UserLayout';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import { Container, Divider, Paper, Typography, Box, Chip, Button, Grid } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react'

export default function FinishBooking(props) {

  // Receiving data and setData for new adding data like duties price and number of duites.
  const {data, setData, post, error} = useForm({
    ...props.data,
  });
 
 

  // Handling the submit action to final booking stage, this is post method to store bookings and booking_detail migration table
  const handleSubmit =  (e) => {
    e.preventDefault();
    post(route('storeBooking'), data);
  }
  console.log(data);
  return (
    <UserLayout>
      <Head title='Recheck detail' />
      <Container maxWidth='xs'>
        <Paper sx={{ padding: 2}} elevation={10}>
            <Box sx={{ border: '2px dotted #000', padding: 3 }}>
              <Grid container>
                <Grid item md={8} xs={12}>
                  
                    <Typography variant='h6' gutterBottom>
                      Be sure your information
                    </Typography>

                    {/* -------------- Patient information ----------------- */}
                      <Typography variant='p' gutterBottom>
                        Patient name: {data.patient_name}
                      </Typography>

                      <Divider />

                      <Typography variant='p' gutterBottom>
                        Patient Age: {data.elderAge}
                      </Typography>

                      <Divider />

                      <Typography variant='p' gutterBottom>
                        Patient Address: {data.address}
                      </Typography>

                      <Divider />

                      <Typography variant='p' gutterBottom>
                        Patient Phone: {data.phone}
                      </Typography>

                      <Divider />

                      {/* Patient's needs  */}
                      <Typography variant='p'>You select the following needs</Typography>
                      <Stack direction="column" spacing={1} sx={{marginBottom:2}}>
                          {data.elderCareTopics.map(topic=>(
                              <Chip label={topic} />
                          ))}
                      </Stack>
                      <Divider />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Box sx={{ maxWidth: 100, margin: 'auto', marginTop: 3}} >
                    <img src={`/images/profiles/${data.image}`} alt='caregiver'/>
                  </Box>
                </Grid>
              </Grid>
                    {/* -------------- Booked Caregiver information ----------------- */}
                      <Typography variant='h6' gutterBottom>
                        Caregiver information
                      </Typography>

                      <Box sx={{marginBottom: 2}}>
                          You booked a <b>{data.level} level</b> caregiver.
                      </Box>

                      <Typography variant='p' gutterBottom>
                        Caregiver name: {data.name}
                      </Typography>
                      <Divider />
                      <Typography variant='p' gutterBottom>
                        Height: {data.height} ft
                      </Typography>
                      <Divider />

                      <Typography variant='p' gutterBottom>
                        Weight: {data.weight} lb
                      </Typography>
                      <Divider />

                      <Typography variant='p' gutterBottom>
                        Level: {data.level}
                      </Typography>
                      <Divider />

                      <Typography variant='p' gutterBottom>
                        Field of Care: {data.care === 'elder' ? 'Elder Care' : ''} {data.care === 'child' ? 'Child Care' : ''} {data.care === 'elder_child' ? 'Elder Care & Child Care' : ''}
                      </Typography>
                      <Divider />

                    {/* -------------- Price calculation ----------------- */}

                      <Box sx={{ margin: 2}} textAlign='center'>
                        <Typography variant='p'>
                          <b>Price {data.level == 'semi' ? 16000 : ''} {data.level == 'skilled' ? 20000 : ''} {data.level == 'advanced' ? 24000 : ''}</b> MMK for 1 duty.
                        </Typography>
                      </Box>

                    {/* -------------- Submit button ----------------- */}
                      <Box sx={{ marginTop: 2}} textAlign='center'>
                          <Button variant='contained' color='secondary' onClick={handleSubmit}>Done</Button>
                      </Box>
                 
                
            </Box>
          
          <Box sx={{ marginTop: 1}} textAlign='center'>
            <Typography variant='p' color='secondary'>Thank you for choosing us.</Typography>
          </Box>
        </Paper>
        
      </Container>
    </UserLayout>
  )
}
