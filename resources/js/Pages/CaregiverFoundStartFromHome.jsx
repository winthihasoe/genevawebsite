import CaregiverCardStartFromHome from '@/Components/CaregiverCardStartFromHome'
import UserLayout from '@/Layouts/UserLayout'
import { Head, Link, usePage } from '@inertiajs/inertia-react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function CaregiverFoundStartFromHome(props) {
  const auth = usePage().props.auth;
  const values = props.values;
  return (
    <UserLayout auth={auth}>
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
                    We found {props.desiredCaregivers.length == 1 ? 'only': ''} <b> {props.desiredCaregivers.length} {" qualified Geneva "} {props.desiredCaregivers.length > 1 ? 'caregivers' : 'caregiver'} </b> <span>{props.city == 'mdy' ? 'in Mandalay' : ''} {props.city == 'ygn' ? 'in Yangon' : ''} {props.city == 'mkn' ? 'in Myitkyina' : ''}</span> 
                </Typography>

               
                  <Box sx={{
                          p: 1,
                          display: "flex",
                          gap: 1,
                          flexWrap: "wrap",
                        }}
                    >
                    {props.desiredCaregivers.map((caregiver) => (
                      <CaregiverCardStartFromHome key={caregiver.id} caregiver={caregiver} values={values}/>
                    ))}
                  </Box>   
              </Box>
              ) 
        }
    </UserLayout>
  )
}
