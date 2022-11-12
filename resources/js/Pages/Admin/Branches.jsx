import React, { useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import { Box, Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import CreateNewBranch from "@/Components/CreateNewBranch";

export default function Branches(props) {
    const [createNew, setCreateNew] = useState(false);
    const branches = props.branches;
    const trainingOfficers = props.trainingOfficers;
    console.log(trainingOfficers);

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Branches" />
            { branches.length == 0 ? 
            <Container maxWidth='md'>
                <Typography variant="h4" textAlign='center' gutterBottom>
                    There is no branch!
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant={createNew == true ? 'outlined' : 'contained'} color={createNew == false ? 'success' : 'error'} onClick={()=>setCreateNew(!createNew)}>{createNew == true ? 'Cancel' : 'Create New Branch'}</Button>
                </Box>
                { createNew == true && <CreateNewBranch trainingOfficers={trainingOfficers} /> }
            </Container>
            :
            <Container maxWidth='md'>
                <Typography variant="h4">All Branches</Typography>
                
                <Box sx={{ my: 1 }}>
                    <Button variant="outlined" onClick={()=>setCreateNew(!createNew)}>{createNew == true ? 'Cancel' : 'Create New Branch'}</Button>
                </Box>
                
                { createNew == true && <CreateNewBranch trainingOfficers={trainingOfficers} /> }
                
                <TableContainer component={Paper} sx={{ my: 2 }}>
                <Table sx={{ minWidth: 700}} aria-label="caption table">
                    <caption>All training branches from Geneva Caregiver Service</caption>

                    {/* Want to make some pagination function for future featuers  */}

                    <TableHead>
                        <TableRow>
                            <TableCell>No.</TableCell>
                            <TableCell>Branch Name</TableCell>
                            <TableCell>Join Date</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Phone</TableCell>
                           
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {branches.map((branch, index) => (
                        <TableRow key={branch.id}>
                            <TableCell>{index+1}</TableCell>
                            <TableCell component="th" scope="row">
                                <Link href={route('showBranch', branch.id)}>
                                    <b>{branch.branch}</b>
                                </Link>
                            </TableCell>
                            <TableCell>{branch.start_date.slice(0, 10)}</TableCell>
                            <TableCell>{branch.address}</TableCell>
                            <TableCell>{branch.phone}</TableCell>
                            
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </Container>
        }
        </Authenticated>
    );
}
