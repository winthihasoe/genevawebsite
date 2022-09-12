import CaregiverCard from '@/Components/CaregiverCard'
import UserLayout from '@/Layouts/UserLayout'
import { Link } from '@inertiajs/inertia-react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function CaregiverFound(props) {
  
  return (
    <UserLayout>
        {props.desiredCaregivers == 0 ? (
                <Typography variant="h2" component="div" textAlign="center">
                    Sorry! No Caregiver found.
                </Typography>
            ) : (
              <Box>

                {/* Showing the number of caregivers found according to the user desired  */}
                <Typography variant="h2" component='div' textAlign='center' gutterBottom>
                    We found {props.desiredCaregivers.length == 1 ? 'only': ''} <b> {props.desiredCaregivers.length} {" "} {props.desiredCaregivers.length > 1 ? 'caregivers' : 'caregiver'} </b> for your need.
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
                  <Typography paragraph textAlign='center'>Please <Link href='/login'>Login</Link>  to continue.</Typography>
                }
                
              </Box>
              ) 
        }
    </UserLayout>
  )
}
