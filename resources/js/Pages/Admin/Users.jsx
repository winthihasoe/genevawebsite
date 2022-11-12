import React, { useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import { Box, Chip, Container, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded';
import CastForEducationRoundedIcon from '@mui/icons-material/CastForEducationRounded';
import GroupIcon from '@mui/icons-material/Group';

export default function Users(props) {
    const users = props.users;
    const [toggleUsers, setToggleUsers] = useState({
        users: true,
        admin: false,
        editor: false,
        training_officer: false,
    });
    const showAllUsers = () =>{
        setToggleUsers({
            users: true,
            admin: false,
            editor: false,
            training_officer: false,
        });
    }

    const showAdmin = () =>{
        setToggleUsers({
            users: false,
            admin: true,
            editor: false,
            training_officer: false,
        });
    }

    const showEditor = () =>{
        setToggleUsers({
            users: false,
            admin: false,
            editor: true,
            training_officer: false,
        });
    }

    const showTrainingOfficer = () =>{
        setToggleUsers({
            users: false,
            admin: false,
            editor: false,
            training_officer: true,
        });
    }
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Users" />
            <Container maxWidth='lg'>
                <Typography variant="h3" gutterBottom>
                    {toggleUsers.users == true && 'All Users'}
                    {toggleUsers.admin == true && 'Admins'}
                    {toggleUsers.editor == true && 'Editors'}
                    {toggleUsers.training_officer == true && 'Training Officers'}
                </Typography>
                <Box sx={{ p: 2,
                        display: "flex",
                        gap: 2,
                        flexWrap: "wrap" }}
                >
                    <Chip onClick={showAllUsers} icon={<GroupIcon />} size='large' label='All User' />
                    <Chip onClick={showAdmin} icon={<AdminPanelSettingsRoundedIcon />} size='large' label='Admin label' />
                    <Chip onClick={showEditor} icon={<SupervisedUserCircleRoundedIcon />} size='large' label='Editor label' />
                    <Chip onClick={showTrainingOfficer} icon={<CastForEducationRoundedIcon />} size='large' label='Training Officer label' />
                </Box>
               
               
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
                            
                            {/* ---------- Show all Users ------------ */}
                            { toggleUsers.users == true && 
                            <TableBody>
                            {users.map((user) => (
                                    <TableRow key={user.id}>
                                        {/* Showing icon for Admin and Eidtor for easy looking  */}
                                        <TableCell>{user.is_admin == 1 && <AdminPanelSettingsRoundedIcon />} {user.is_editor == 1 && <SupervisedUserCircleRoundedIcon />} {user.is_training_class_officer == 1 && <CastForEducationRoundedIcon />}</TableCell>
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
                            }

                            {/* ---------- Show Admins ------------ */}
                            { toggleUsers.admin == true && 
                            <TableBody>
                            {users.filter(user => user.is_admin==1).map((user) => (
                                    <TableRow key={user.id}>
                                       
                                        <TableCell><AdminPanelSettingsRoundedIcon /></TableCell>
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
                            }

                            {/* ---------- Show Editors ------------ */}
                            { toggleUsers.editor == true &&
                                <TableBody>
                                    {users.filter(user => user.is_editor==1).map((user) => (
                                            <TableRow key={user.id}>
                                                
                                                <TableCell><SupervisedUserCircleRoundedIcon /></TableCell>
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
                            }

                            {/* ---------- Show Training Officer ------------ */}
                            { toggleUsers.training_officer == true && 
                                <TableBody>
                                    {users.filter(user => user.is_training_class_officer==1).map((user) => (
                                            <TableRow key={user.id}>
                                                
                                                <TableCell><CastForEducationRoundedIcon /></TableCell>
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
                            }
                        </Table>
                    </TableContainer>
            </Container>
        </Authenticated>
    );
}
