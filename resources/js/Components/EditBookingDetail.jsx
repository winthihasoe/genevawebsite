import { Link, useForm, usePage } from '@inertiajs/inertia-react';
import { Box, Button, Checkbox, Divider, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, TextField, Paper, Typography, TextareaAutosize, Stack, InputLabel, Select, MenuItem } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import React, { useState } from 'react'
// import Swal from 'sweetalert2';

export default function EditUserBookingDetail(props) {
    const booking = props.booking;
    const bookingDetail = props.bookingDetail;   
    const elderCareTopics = usePage().props.elderCareTopics;
    const childCareTopics = usePage().props.childCareTopics;

    const { data, setData, put, errors, processing } =useForm({
        ...booking,
        ...bookingDetail,
    })

    const handleChange = (e) => {
        const { name, value } =e.target;
        setData({ ...data, [name]: value })
    }

    const handleDate = (input) => (e) => {
        setData({ ...data, [input]: e });
    };

    const handleNeed = (input) => (e) => {
        const needs = data.needs;
        const index = needs.indexOf(e.target.value);
        if (index === -1) {
            setData({ ...data, [input]: [...needs, e.target.value] });
        } else {
            setData({
                ...data,
                [input]: needs.filter((topic) => topic !== e.target.value),
            });
        }
    };

    const updateBooking = (e) => {
        put(route('editBooking', booking.id), data);
        location.reload();
    }

    return (
        <>
        
            <Typography variant='overline' textAlign='center'>Edit Case</Typography>
            
            <Box component="form"
                sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}>
                
                <TextField
                    label="Patient Name"
                    name='patient_name'
                    variant="standard"
                    onChange={handleChange}
                    defaultValue={booking.patient_name}
                    required
                />
                { errors.patient_name }

                <TextField
                    label="Patient Age"
                    name='patient_age'
                    variant="standard"
                    onChange={handleChange}
                    defaultValue={booking.patient_age}
                    required
                />
                { errors.patient_age }

               
                <TextField
                    label="Address"
                    name='address'
                    variant="standard"
                    onChange={handleChange}
                    defaultValue={booking.address}
                    required
                />
                 { errors.address }

                
                <TextField
                    label="City"
                    name='city'
                    variant="standard"
                    onChange={handleChange}
                    defaultValue={booking.city}
                    required
                />
                { errors.city }

                <TextField
                    label="Phone No."
                    name='phone'
                    variant="standard"
                    onChange={handleChange}
                    defaultValue={booking.phone}
                    required
                />
                { errors.phone }

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Start Date"
                        value={booking.start_date}
                        onChange={handleDate("start_date")}
                        renderInput={(params) => (
                            <TextField variant='standard' {...params} />
                        )}
                    />
                    { errors.start_date }

                    <DatePicker
                        label="End Date"
                        value={booking.end_date}
                        onChange={handleDate("end_date")}
                        renderInput={(params) => (
                            <TextField variant='standard' {...params} />
                        )}
                    />
                </LocalizationProvider>
            </Box>

            

            <Box sx={{mt: 3}}>
                <FormControl>
                    <FormLabel id="duty">
                        What duty do you need?
                    </FormLabel>
                    <RadioGroup
                        
                        aria-labelledby="duty"
                        name="duty"
                        value={booking.duty}
                        onChange={handleChange}
                        
                    >
                        <FormControlLabel
                            value="day"
                            control={<Radio />}
                            label="Day (Today 7am - 7pm)"
                        />
                        <FormControlLabel
                            value="night"
                            control={<Radio />}
                            label="Night (Today 7pm - Tomorrow 7am)"
                        />
                        <FormControlLabel
                            value="24hr"
                            control={<Radio />}
                            label="24 hours"
                        />
                    </RadioGroup>
                </FormControl>
                <Divider />
                <FormControl >
                    <FormLabel component="legend">
                        You checked the following needs
                    </FormLabel>
                
                    {booking.care == 'child' && 
                        <FormGroup>
                            {childCareTopics.map(careTopic => (
                                    <FormControlLabel
                                    value={careTopic.topic}
                                    control={
                                        <Checkbox
                                            checked={data.needs.includes(
                                                careTopic.topic
                                            )}
                                            onChange={handleNeed(
                                                "needs"
                                            )}
                                        />
                                    }
                                    label={careTopic.topic}
                                    />
                            ))}     
                        </FormGroup>
                    }
                    {booking.care == 'elder' && 
                        <FormGroup>
                            {elderCareTopics.map(careTopic => (
                                    <FormControlLabel
                                    value={careTopic.topic}
                                    control={
                                        <Checkbox
                                            checked={data.needs.includes(
                                                careTopic.topic
                                            )}
                                            onChange={handleNeed(
                                                "needs"
                                            )}
                                        />
                                    }
                                    label={careTopic.topic}
                                    />
                            ))}     
                        </FormGroup>
                    }
                    { errors.needs }
                </FormControl>
                <TextareaAutosize
                    maxRows={2}
                    name='note_to_caregiver'
                    aria-label="your note to caregiver"
                    placeholder='note to caregiver'
                    defaultValue={data.note_to_caregiver}
                    style={{ width: '100%' }}
                    onChange={handleChange}
                />
                {data.is_duty == false && data.is_complete == false && 
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <label id="cancel">Is Booking Cancelled?</label>
                        <Select
                            labelId="cancel"
                            id="cancel"
                            value={data.is_cancel}
                            label="Cancel"
                            name="is_cancel"
                            onChange={handleChange}
                        >
                            <MenuItem value={1}>Yes</MenuItem>
                            <MenuItem value={0}>No</MenuItem>
                            
                        </Select>
                    </FormControl>
                }
                {/* Is Duty complete? button is removed because it has been controlled from DutyController  */}
                {/* Is Duty start? button is removed because it can conflict to duties table entry  */}

            </Box>
            <Divider />
            <Box sx={{ m: 1 }}>
                <Button variant='contained' color="error" onClick={updateBooking} fullWidth disabled={processing}>Update</Button>
            </Box>
        </>
            
    )
}
