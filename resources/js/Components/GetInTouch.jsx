import { useForm } from '@inertiajs/inertia-react'
import { Box, Grid, TextareaAutosize, TextField, Typography } from '@mui/material'
import React from 'react'
import Button from './Button'
import Input from './Input'
import Label from './Label'

export default function GetInTouch() {
    const {data, processing, post} = useForm({
        name: '',
        email: '',
        title: '',
        resason: ''
    })
  return (
    <Box sx={{paddingTop: 8, paddingBottom: 8}} id="contact">
        <Box>
            <Typography variant='h3' textAlign='center'>
                Get in touch with us
            </Typography>
        </Box>

        <Grid container spacing={4}>
            <Grid item md={6} sm={6} xs={12} sx={{padding: 3}}>
                <Typography textAlign='right' variant='h5' gutterBottom>
                    We are ready for your need
                </Typography>
                <Typography textAlign='right' paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam tempora adipisci quidem? Consequatur sed inventore dolore laborum fugit. Quos, accusantium vel. Distinctio est eum veritatis ullam id quae nisi dolores.
                </Typography>
                <Typography textAlign='right' paragraph>Your form will be sent to "contact@genevacaring.com"</Typography>
            </Grid>
            <Grid item md={6} sm={6} xs={12} sx={{padding: 3}}>
                <Box>
                        <form>
                            <div className="mb-4">
                                <Label forInput="name" value="Your Name" />
                                <Input 
                                    type="text"
                                    name="name"
                                    className="mt-1 block w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <Label forInput="email" value="Email" />
                                <Input 
                                    type="email"
                                    name="email"
                                    className="mt-1 block w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <Label forInput="title" value="Title" />
                                <Input 
                                    type="text"
                                    name="title"
                                    className="mt-1 block w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <Label forInput="reason" value="Reason" />
                            <TextareaAutosize
                                maxRows={4}
                                aria-label="maximum height"
                                placeholder="Your are feel free to contact us..."
                                style={{ width: '100%' }}
                            />

                            </div>
                            <Box textAlign='center' sx={{marginTop: 2}}>
                                <Button processing={processing}>Send</Button>
                            </Box>
                        </form>
                </Box>
            </Grid>
        </Grid>
       
    </Box>
  )
}
