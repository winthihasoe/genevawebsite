import CaregiverCard from '@/Components/CaregiverCard'
import UserLayout from '@/Layouts/UserLayout'
import { Head, Link } from '@inertiajs/inertia-react'
import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function CaregiverFound(props) {
  
  return (
    <UserLayout auth={props.auth}>
      <Head title='Caregiver Found' />
        {props.desiredCaregivers == 0 ? (
                <Box textAlign='center'>
                    <Typography variant="h2" component="div" gutterBottom>
                    Sorry! No Caregiver found. 
                    </Typography>
                    <Link href='/'>Back to Home</Link>
                </Box>
            ) : (
              <Box>

                {/* Showing the number of caregivers found according to the user desired in that region  */}
                <Typography variant="h5" component='div' textAlign='center' gutterBottom>
                    We found {props.desiredCaregivers.length == 1 ? 'only': ''} <b> {props.desiredCaregivers.length} {" qualified Geneva "} {props.desiredCaregivers.length > 1 ? 'caregivers' : 'caregiver'} </b> {props.location == 'mdy' ? 'in Mandalay' : ''} {props.location == 'ygn' ? 'in Yangon' : ''} {props.location == 'mkn' ? 'in Myitkyina' : ''}
                </Typography>

                {/* Check the user is sign in or not  */}
                {props.username ? 
                  <Box sx={{
                          p: 1,
                          display: "flex",
                          gap: 1,
                          flexWrap: "wrap",
                  }}>
                    {props.desiredCaregivers.map(caregiver => (
                      <CaregiverCard caregiver={caregiver} />
                    ))}
                  </Box>
                  : 
                  // If user is not signed in, Let user to sign in
                  <Box textAlign='center'>
                    <Typography paragraph textAlign='center'>Please <Link href='/login'>Login</Link>  to continue.</Typography>
                    <Link href='/login'>
                      <Button variant='contained' color='secondary'>Login</Button>
                    </Link>
                  </Box>    
                }
                
              </Box>
              ) 
        }
    </UserLayout>
  )
}
