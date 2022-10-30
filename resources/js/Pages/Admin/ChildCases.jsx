import Authenticated from '@/Layouts/Authenticated';
import { Link } from '@inertiajs/inertia-react';
import { Container, Table, Typography, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, Chip } from '@mui/material';
import React from 'react'

export default function ChildCases(props) {
    const childCases = props.childCases;
    const today = new Date();
    return (
        <Authenticated auth={props.auth}>
            <Container maxWidth='lg'>
                <Typography variant='h6' gutterBottom>
                    All Child Cases
                </Typography>
                <Typography variant='overline' gutterBottom>
                    These cases are assigning duty now.
                </Typography><br />
                <Typography variant='p' gutterBottom><b> Today is { today.toDateString() }. </b></Typography>
                { childCases.length == 0 ? <Box sx={{ margin: '20px auto' }}><Typography textAlign='center' variant='h4'>No Child Case right now!</Typography></Box> : 
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650}} aria-label="child case table">
                        <caption>All bookings make to Geneva Caregiver Service</caption>

                        {/* Want to make some pagination function for future featuers  */}

                        <TableHead>
                            <TableRow>
                                <TableCell>No.</TableCell>
                                <TableCell>Patient Name</TableCell>
                                <TableCell align='center'>Age</TableCell>
                                <TableCell align="center">Start date</TableCell>
                                <TableCell align="center">End Date</TableCell>
                                <TableCell align="center">Assign CG</TableCell>
                                <TableCell align="center">Duty</TableCell>
                                <TableCell align='center'>Booking created at</TableCell>
                                <TableCell align='center'>Region</TableCell>
                                <TableCell align='center'>Service</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {childCases.map((childCase, index) => (
                            <TableRow key={childCase.id}>
                                {/* Showing icon for Elder or Child care for easy looking  */}
                                <TableCell>{index + 1}</TableCell>
                                <TableCell component="th" scope="row">
                                    <Link href={route('showChildCaseDetail', childCase.id)}>
                                        <b>{childCase.patient_name}</b>
                                    </Link>
                                </TableCell>
                                <TableCell align='center'>{childCase.patient_age}</TableCell>
                                <TableCell align="center">{childCase.created.slice(0, 10)}</TableCell>
                                <TableCell align="center">{childCase.end_date.slice(0, 10)}</TableCell>
                                <TableCell align="center">{childCase.name}</TableCell>
                                <TableCell align="center">{childCase.duty}</TableCell>
                                <TableCell align='center'>{childCase.booking_created_at}</TableCell>
                                <TableCell align='center'>{childCase.city}</TableCell>
                                <TableCell align='center'>{childCase.is_complete == true ? <Chip label='Ended' variant='outlined' color='error'/> : <Chip label='Running' variant='contained' color='success'/>}</TableCell>

                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>}
            </Container>
        </Authenticated>
    )
}
