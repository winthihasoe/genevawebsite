import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import { Box, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded';

export default function Users(props) {
    const users = props.users;
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Users" />
            <Container maxWidth='lg'>
                <Typography variant="h3" gutterBottom>All Users</Typography>
                <Box>
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650}} aria-label="caption table">
                    <caption>All User signed to Geneva Caregiver Service</caption>

                    {/* Want to make some pagination function for future featuers  */}

                    <TableHead>
                        <TableRow>
                            <TableCell>Type</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell align="center">Phone</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Register Date</TableCell>
                            <TableCell align="center">Last Login</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {users.map((user) => (
                            <TableRow key={user.id}>
                                {/* Showing icon for Admin and Eidtor for easy looking  */}
                                <TableCell>{user.is_admin == 1 ? <AdminPanelSettingsRoundedIcon /> : ''} {user.is_editor == 1 ? <SupervisedUserCircleRoundedIcon /> : '' }</TableCell>
                                <TableCell align="center"><Link href='#'><b>{user.name}</b></Link></TableCell>
                                    
                                <TableCell align="center">
                                        {user.phone}
                                </TableCell>
                                <TableCell align="center">{user.email}</TableCell>
                                <TableCell align="center">{user.created_at.slice(0, 10)}</TableCell>
                                <TableCell align="center">Soon...</TableCell>
                            </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
                </Box>
            </Container>
        </Authenticated>
    );
}
