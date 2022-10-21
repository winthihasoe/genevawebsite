import TrainingLayout from '@/Layouts/TrainingLayout'
import { Head, usePage } from '@inertiajs/inertia-react'
import { Box, Chip, Container, Divider, Grid, Typography } from '@mui/material'
import React from 'react'

export default function ElderCareTraining(props) {
    const auth = usePage().props;
    const elderTrainings = props.elderTrainings;
    
    return (
        <TrainingLayout auth={auth}>
            <Head title='Elder Training' />

            {/* ----- Detail Section ----- */}
            <Container maxWidth='md'>
                <Box textAlign='center' sx={{ p: 2 }}>
                    <Grid container alignItems='center'>
                        <Grid item md={6} xs={12}>
                            <Typography variant='h4' gutterBottom>
                                Elder Care Training
                            </Typography>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <img src='/images/training/eldercaretrainingcover.jpg' alt='elder training' /> 
                        </Grid>
                    </Grid>
                    
                    <Divider variant='inset' />
                    <Typography variant="overline" display="block" gutterBottom >Elder Care Training Section</Typography>
                </Box>

                <Box>
                    {elderTrainings.map(post => (
                        <Box>
                        <Grid container sx={{ margin: 2 }} spacing={2}>

                            {/* Image section  */}
                            <Grid item md={6}>
                               <img src={`/images/training/${post.post_image}`} alt="elder training" />
                            </Grid>

                            {/* Text and description section  */}
                            <Grid item md={6}>
                                <Box sx={{ marginBottom : 2 }}>
                                    <Typography variant='h6'>{post.post_title}</Typography>
                                </Box>
                                <Box sx={{ m : 2 }}>
                                    <Typography paragraph>{post.post_body}</Typography>
                                </Box>
                                <Box sx={{ m: 2 }}>
                                    <Chip label={post.post_footer} />
                                </Box>
                            </Grid>
                            
                        </Grid>
                        <Divider />
                        </Box>
                    ))}
                </Box>
                
                    
               
            </Container>
        </TrainingLayout>
    )
}
