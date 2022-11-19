import Authenticated from '@/Layouts/Authenticated';
import { Box, Container, Divider, Paper, Typography, Stack, Chip, Button, Grid, Modal, Fade, Backdrop } from '@mui/material'
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import { Link, useForm } from '@inertiajs/inertia-react';
import React, { useState } from 'react';
import EditCaseDetail from '@/Components/EditCaseDetail';

export default function ShowElderCaseDetail(props) {
    const caseDetail = props.caseDetail;
    const { data, setData, put, error } = useForm({
        ...caseDetail
    });

    const endDuty = (e) => {
        e.preventDefault();
        put(route('endDuty', caseDetail.id), data);
        setOpen(false);
    }

    const [isEditing, setIsEditing] = useState(false);

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

    // For model open and close
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Authenticated auth={props.auth}>
            <Container maxWidth='md'>
                <Link href={route('elderCases')}>
                    <KeyboardBackspaceRoundedIcon /> <Typography variant='overline'>back</Typography>
                </Link>
                
                <Paper elevation={12} sx={{ p: 4, mt:2 }}>
                    { isEditing == true ? 
                    <>
                    <EditCaseDetail caseDetail={caseDetail} isEditing={isEditing}/>
                    <Box sx={{ m: 1 }}>
                        <Button variant='outlined' color='success' fullWidth onClick={()=>setIsEditing(!isEditing)}>Cancel</Button>
                    </Box>
                    </>
                    :
                    <>
                        <Grid container>
                            <Grid item md={6} xs={12}>
                                <Typography variant='h4' gutterBottom>
                                    {caseDetail.patient_name}'s information
                                </Typography>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <Box textAlign='right'>
                                    {caseDetail.is_complete == false ? <Button onClick={handleOpen} color='error' variant='contained'>End Duty</Button> : <Chip label='This case is ended' variant='contained' color='error' />}
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
                                                End duty for {caseDetail.patient_name}!
                                            </Typography>
                                            <Typography id="transition-modal-description" sx={{ m: 2 }}>
                                                Are you sure to end duty?
                                            </Typography>
                                            
                                            <Button onClick={endDuty} variant='contained' color='error'>End duty</Button> {' '}
                                            <Button onClick={handleClose} variant='outlined'>No</Button>
                                            
                                        </Box>
                                        </Fade>
                                    </Modal>
                                </Box>
                            </Grid>
                        </Grid>
                        
                        <Box sx={{ m: 2 }}>
                            <Typography variant='p' gutterBottom>
                                Patient name: <b>{caseDetail.patient_name}</b>
                            </Typography>

                            <Divider />

                            <Typography variant='p' gutterBottom>
                                Patient Age: {caseDetail.patient_age} years
                            </Typography>

                            <Divider />

                            <Typography variant='p' gutterBottom>
                                Patient Address: {caseDetail.address}
                            </Typography>

                            <Divider />

                            <Typography variant='p' gutterBottom>
                                Patient Phone: {caseDetail.phone}
                            </Typography>

                            <Divider />

                            {/* Patient's needs  */}
                            <Typography variant='p'><b>{caseDetail.patient_name}</b> selected the following needs</Typography>
                            <Box sx={{margin: 1}}>
                                {caseDetail.needs.map(topic=>(
                                    <Box sx={{p:1, display: 'inline-block'}} key={topic}>
                                    <Chip label={topic} />
                                    </Box>
                                ))}
                            </Box>
                            <Divider />

                            {/* patient note to caregiver  */}
                            { caseDetail.note_to_caregiver && 
                            <Box sx={{ width: '100%', p: 2, border: '1px solid #000000', marginBottom: 2 }}>
                                    <Typography component='div' gutterBottom>
                                    Patient notes to caregiver
                                    </Typography>
                                    <Typography variant='p' gutterBottom>
                                    <b>{ caseDetail.note_to_caregiver }</b>
                                    </Typography>
                                </Box>}
                            

                            <Typography variant='p' gutterBottom>
                                Booking Start Date: {caseDetail.start_date.slice(0, 10)}
                            </Typography>
                            <Divider />

                            <Typography variant='p' gutterBottom>
                                Booking End Date: {caseDetail.end_date.slice(0, 10)}
                            </Typography>

                            <Divider />

                            <Typography variant='h6' gutterBottom>
                            Caregiver information
                            </Typography>

                            <Typography variant='p' gutterBottom>
                                Caregiver name: {caseDetail.name}
                            </Typography>
                            <Divider />

                            <Typography variant='p' gutterBottom>
                                Duty assign: {caseDetail.duty} duty
                            </Typography>
                            <Divider />

                            <Typography variant='p' gutterBottom>
                                Level: {caseDetail.level} level
                            </Typography>
                            <Divider />

                            <Typography variant='p' gutterBottom>
                                Field of Care: {caseDetail.care === 'elder' ? 'Elder Care' : ''} {caseDetail.care === 'child' ? 'Child Care' : ''} {caseDetail.care === 'elder_child' ? 'Elder Care & Child Care' : ''}
                            </Typography>
                            <Divider />

                        </Box>
                    </>
                    }
                    
                   
                    <Box textAlign='right'>
                        {isEditing == false &&
                        <Button variant='outlined' onClick={()=>setIsEditing(!isEditing)} color='success'>Edit Case</Button>
                        }
                    </Box>
                
                    
                </Paper>
            </Container>
        </Authenticated>
    )
}
