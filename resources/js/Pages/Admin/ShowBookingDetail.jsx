import Authenticated from '@/Layouts/Authenticated'
import { Box, Container, Divider, Paper, Typography, Stack, Chip, Button, Grid, Modal, Fade, Backdrop } from '@mui/material'
import React from 'react';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import { Link, useForm } from '@inertiajs/inertia-react';

export default function ShowBookingDetail(props) {
    const booking = props.booking;
    const bookingDetail = props.bookingDetail;
    const bookedCaregiver = props.bookedCaregiver;

    const { data, setData, post, put, error } = useForm({
        ...booking,
        ...bookingDetail,
        ...bookedCaregiver,
    });

    const startDuty = (e) => {
        e.preventDefault();
        post(route('startDuty', booking.id), data);
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 330,
        bgcolor: 'background.paper',
        borderRadius: 3,
        boxShadow: 24,
        p: 3,
        textAlign:'center',
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
        
    return (
        <Authenticated auth={props.auth} error={props.error}>
            <Container maxWidth="md">
                <Link href={route('allBooking')}>
                    <KeyboardBackspaceRoundedIcon /> <Typography variant='overline'>back</Typography>
                </Link>
                
                <Paper elevation={12} sx={{ p: 4, mt:2 }}>
                    <Grid container>
                        <Grid item md={6} xs={12}>
                            <Typography variant='h4' gutterBottom>
                                Booking Detail
                            </Typography>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <Box textAlign='right'>
                                {booking.is_duty == false && <Button onClick={handleOpen} color='success' variant='contained'>Start Duty</Button>}
                                <Modal
                                    aria-labelledby="transition-modal-title"
                                    aria-describedby="transition-modal-description"
                                    open={open}
                                    onClose={handleClose}
                                    closeAfterTransition
                                    BackdropComponent={Backdrop}
                                    BackdropProps={{
                                    timeout: 500,
                                    }}
                                >
                                    <Fade in={open}>
                                    <Box sx={style}>
                                        <Typography id="transition-modal-title" variant="h6" component="h2">
                                            Start duty for {booking.patient_name}!
                                        </Typography>
                                        <Typography id="transition-modal-description" sx={{ m: 2 }}>
                                            Are you sure to start duty?
                                        </Typography>
                                        
                                        <Button onClick={startDuty} variant='contained' color='success'>Start duty</Button> {' '}
                                        <Button onClick={handleClose} variant='outlined'>No</Button>
                                        
                                    </Box>
                                    </Fade>
                                </Modal>
                            </Box>
                        </Grid>
                    </Grid>
                    
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
                    
                    {booking.is_duty == false && 
                        <Box textAlign='right'>
                            <Button variant='contained' href={route('bookingCancelled', bookedCaregiver.id)} color='error'>Cancel booking</Button>
                        </Box>
                    }
                    
                </Paper>
            </Container>
        </Authenticated>
    )
}
