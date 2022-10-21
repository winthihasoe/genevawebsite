import Authenticated from '@/Layouts/Authenticated';
import { Link } from '@inertiajs/inertia-react';
import { Container, Table, Typography, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react'

export default function ElderCases(props) {
    const elderCases = props.elderCases;
    const today = new Date();
    return (
        <Authenticated auth={props.auth}>
            <Container maxWidth='lg'>
                <Typography variant='h6' gutterBottom>
                    All Elder Cases
                </Typography>
                <Typography variant='overline' gutterBottom>
                    These cases are assigning duty now.
                </Typography><br />
                <Typography variant='p' gutterBottom><b> Today is { today.toDateString() }. </b></Typography>
                { elderCases.length == 0 ? <Box sx={{ margin: '20px auto' }}><Typography textAlign='center' variant='h3'>No Elder Case right now!</Typography></Box> : 
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650}} aria-label="elder case table">
                        <caption>Geneva Caregiver Service</caption>

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
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {elderCases.map((elderCase, index) => (
                            <TableRow key={elderCase.id}>
                                {/* Showing icon for Elder or Child care for easy looking  */}
                                <TableCell>{index + 1}</TableCell>
                                <TableCell component="th" scope="row">
                                    <Link>
                                        <b>{elderCase.patient_name}</b>
                                    </Link>
                                </TableCell>
                                <TableCell align='center'>{elderCase.patient_age}</TableCell>
                                <TableCell align="center">{elderCase.created.slice(0, 10)}</TableCell>
                                <TableCell align="center">{elderCase.end_date.slice(0, 10)}</TableCell>
                                <TableCell align="center">{elderCase.name}</TableCell>
                                <TableCell align="center">{elderCase.duty}</TableCell>
                                <TableCell align='center'>{elderCase.booking_created_at}</TableCell>
                                <TableCell align='center'>{elderCase.city}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>}
            </Container>
        </Authenticated>
    )
}
