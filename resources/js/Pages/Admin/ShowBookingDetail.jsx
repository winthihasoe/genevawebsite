import Authenticated from '@/Layouts/Authenticated'
import { Box, Container, Divider, Paper, Typography, Stack, Chip } from '@mui/material'
import React from 'react';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import { Link } from '@inertiajs/inertia-react';

export default function ShowBookingDetail(props) {
    const booking = props.booking;
    const bookingDetail = props.bookingDetail;
    const bookedCaregiver = props.bookedCaregiver;
    
    return (
        <Authenticated auth={props.auth} error={props.error}>
            <Container maxWidth="md">
                <Link href={route('allBooking')}>
                    <KeyboardBackspaceRoundedIcon /> <Typography variant='overline'>back</Typography>
                </Link>
                <Paper elevation={12} sx={{ p: 4, mt:2 }}>
                    <Typography variant='h4' gutterBottom>
                        Booking Detail
                    </Typography>
                    <Box sx={{ m: 2 }}>
                        <Typography variant='p' gutterBottom>
                            Patient name: <b>{booking.patient_name}</b>
                        </Typography>

                        <Divider />

                        <Typography variant='p' gutterBottom>
                            Patient Age: {bookingDetail.patient_age} years
                        </Typography>

                        <Divider />

                        <Typography variant='p' gutterBottom>
                            Patient Address: {booking.address}
                        </Typography>

                        <Divider />

                        <Typography variant='p' gutterBottom>
                            Patient Phone: {booking.phone}
                        </Typography>

                        <Divider />

                        {/* Patient's needs  */}
                        <Typography variant='p'><b>{booking.patient_name}</b> selected the following needs</Typography>
                        <Box sx={{margin: 1}}>
                            {bookingDetail.needs.map(topic=>(
                                <Box sx={{p:1, display: 'inline-block'}}>
                                <Chip label={topic} />
                                </Box>
                            ))}
                        </Box>
                        <Divider />

                        { bookingDetail.note_to_caregiver && <Box sx={{ width: '100%', p: 2, border: '1px solid #000000', marginBottom: 2 }}>
                        <Typography component='div' gutterBottom>
                          Patient notes to caregiver
                        </Typography>
                        <Typography variant='p' gutterBottom>
                          <b>{ bookingDetail.note_to_caregiver }</b>
                        </Typography>
                      </Box>
                      }

                        <Typography variant='p' gutterBottom>
                            Booking Start Date: {booking.start_date.slice(0, 10)}
                        </Typography>
                        <Divider />

                        <Typography variant='p' gutterBottom>
                            Booking End Date: {booking.end_date.slice(0, 10)}
                        </Typography>

                        <Divider />

                        <Typography variant='h6' gutterBottom>
                        Caregiver information
                        </Typography>

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

                        <Typography variant='p'><b>{bookedCaregiver.name}</b>  can do the following skills</Typography>
                        <Box sx={{margin: 1}}>
                            {bookedCaregiver.skills.map(topic=>(
                                <Box sx={{p:1, display: 'inline-block'}}>
                                <Chip label={topic} />
                                </Box>
                            ))}
                        </Box>
                        <Divider />

                    </Box>
                </Paper>
            </Container>
        </Authenticated>
    )
}
