import UserLayout from '@/Layouts/UserLayout';
import { Head, Link, usePage } from '@inertiajs/inertia-react'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'

export default function UserBookings(props) {
  const auth = usePage().props;
  const userBookings = props.userBookings;
  return (
    <UserLayout auth={auth}>
      <Head title='My Bookings' />
      <Typography variant='h6'>My Bookings</Typography>
      <Typography variant='overline' gutterBottom>All of your booking made are here.</Typography>
      { userBookings.map(userBooking => (
        <Card sx={{ display: 'flex', maxWidth: 400, margin: '10px auto' }} key={userBooking.id}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Link href={route('userBookingDetail', userBooking.id)}>
              <CardActionArea>
                <CardContent sx={{ flex: '1 0 auto', width: 250 }}>
                  
                  <Typography component="div" variant="p">
                    Name: { userBooking.patient_name }
                  </Typography>

                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    You booked for { userBooking.care } care
                  </Typography>
                  <Typography variant='p' component='div'>See more detail</Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Box>
          <Link href={route('userBookingDetail', userBooking.id)}>
            <CardMedia
              component="img"
              sx={{ height: 140 }}
              image={`/images/profiles/${userBooking.caregiver_photo}`}
              alt='caregiver photo'
            />
          </Link>
          
        </Card>
      ))}
    </UserLayout>
  )
}
