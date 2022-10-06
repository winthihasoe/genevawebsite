import Authenticated from '@/Layouts/Authenticated'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import ElderlyWomanRoundedIcon from '@mui/icons-material/ElderlyWomanRounded';
import ChildCareRoundedIcon from '@mui/icons-material/ChildCareRounded';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Link } from '@inertiajs/inertia-react';

export default function AllBookings(props) {
    const bookings = props.bookings;
    
    console.log(bookings);
    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <Container maxWidth='lg'>
                <Typography variant='h6' gutterBottom>
                    All Bookings
                </Typography>
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650}} aria-label="caption table">
                    <caption>All bookings make to Geneva Caregiver Service</caption>

                    {/* Want to make some pagination function for future featuers  */}

                    <TableHead>
                        <TableRow>
                            <TableCell>Type</TableCell>
                            <TableCell>Patient Name</TableCell>
                            <TableCell align="right">Start date</TableCell>
                            <TableCell align="right">End Date(g)</TableCell>
                            <TableCell align="right">Location</TableCell>
                            <TableCell align="right">Duty</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {bookings.map((booking) => (
                            <TableRow key={booking.id}>
                            {/* Showing icon for Elder or Child care for easy looking  */}
                            <TableCell>{booking.care == 'elder' ? <ElderlyWomanRoundedIcon /> : <ChildCareRoundedIcon />} </TableCell>
                            <TableCell component="th" scope="row">
                                <Link href={route('showBooking', booking.id)}>
                                    <b>{booking.patient_name}</b>
                                </Link>
                            </TableCell>
                            <TableCell align="right">{booking.start_date.slice(0, 10)}</TableCell>
                            <TableCell align="right">{booking.end_date.slice(0, 10)}</TableCell>
                            <TableCell align="right">{booking.city}</TableCell>
                            <TableCell align="right">{booking.duty}</TableCell>
                            </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </Container>
        </Authenticated>
    )
}
