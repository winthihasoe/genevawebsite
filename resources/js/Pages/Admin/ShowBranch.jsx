import BackButton from '@/Components/BackButton';
import Authenticated from '@/Layouts/Authenticated';
import { Box, Button, Container, Divider, Paper, Typography } from '@mui/material';
import React, { useState } from 'react'
import EditBranch from '@/Components/EditBranch';

export default function ShowBranch(props) {
    const showBranch = props.showBranch;
    const [isEditing, setIsEditing] = useState(false);

  return (
    <Authenticated auth={props.auth} error={props.error}>
        <Container maxWidth='md'>
            <BackButton name={'branches'} />
            { isEditing == false ? 
            <Paper elevation={10} sx={{ p:1 }}>
                <Box sx={{ border: '2px dotted #000', p:3 }}>
                    <Typography variant='h4' gutterBottom><i>Show Branch Detail</i></Typography>
                    <Typography variant='h6' gutterBottom >Branch Name: {showBranch.branch}</Typography>
                    <Divider />
                    <Typography variant='h6' gutterBottom >Branch Officer: {showBranch.officer_name}</Typography>
                    <Divider />
                    <Typography variant='h6' gutterBottom >Trainers: {showBranch.trainers}</Typography>
                    <Divider />
                    <Typography variant='h6' gutterBottom >Address: {showBranch.address}</Typography>
                    <Divider />
                    <Typography variant='h6' gutterBottom >Phone: {showBranch.phone}</Typography>
                    <Divider />
                    <Typography variant='h6' gutterBottom >Start date : {showBranch.start_date.slice(0, 10)}</Typography>
                    <Divider />
                    <Box textAlign="right" sx={{ my: 2 }}>
                        <Button variant='outlined' color='error' onClick={()=>setIsEditing(!isEditing)}>Edit Branch</Button>
                    </Box>
                </Box> 
            </Paper>
            :
            <EditBranch showBranch={showBranch}/>
            }
        </Container>
    </Authenticated>
    
  )
}
