import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'


export default function OurServices() {
  return (
    <>
        <Box sx={{margin: 10}} textAlign='center'>
            <Typography variant='h4' gutterBottom sx={{}}>
                OUR SERVICES
            </Typography>
            <Typography variant="overline" display="block" gutterBottom >Managed healthcare service</Typography>
            <Typography paragraph>
                We make efforts to change the way that healthcare services are offered in order to meet the changing needs of our patients, both for the present and future.
            </Typography>
        </Box>

        <Box>
          
        </Box>
    </>
  )
}
