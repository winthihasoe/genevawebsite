import { Link, useForm } from '@inertiajs/inertia-react';
import { Box, Button, Checkbox, Divider, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, TextField, Paper, Typography, TextareaAutosize, Stack, InputLabel, Select, MenuItem } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import React, { useState } from 'react'
// import Swal from 'sweetalert2';

export default function EditUserBookingDetail(props) {
    const caseDetail = props.caseDetail;   
    const { data, setData, put, errors, processing } =useForm({
        ...caseDetail,
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

    const editCase = (e) => {
        put(route('editCase', caseDetail.id), data);
        location.reload();
    }
    console.log(data);
    
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
                    defaultValue={data.patient_name}
                    required
                />
                { errors.patient_name }

                <TextField
                    label="Patient Age"
                    name='patient_age'
                    variant="standard"
                    onChange={handleChange}
                    defaultValue={data.patient_age}
                    required
                />
                { errors.patient_age }

               
                <TextField
                    label="Address"
                    name='address'
                    variant="standard"
                    onChange={handleChange}
                    defaultValue={data.address}
                    required
                />
                 { errors.address }

                
                <TextField
                    label="City"
                    name='city'
                    variant="standard"
                    onChange={handleChange}
                    defaultValue={data.city}
                    required
                />
                { errors.city }

                <TextField
                    label="Phone No."
                    name='phone'
                    variant="standard"
                    onChange={handleChange}
                    defaultValue={data.phone}
                    required
                />
                { errors.phone }

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Start Date"
                        value={data.start_date}
                        onChange={handleDate("start_date")}
                        renderInput={(params) => (
                            <TextField variant='standard' {...params} />
                        )}
                    />
                    { errors.start_date }

                    <DatePicker
                        label="End Date"
                        value={data.end_date}
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
                        value={data.duty}
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
                
                    <FormGroup>
                        <FormControlLabel
                            value="Personal grooming"
                            control={
                                <Checkbox
                                    checked={data.needs.includes(
                                        "Personal grooming"
                                    )}
                                    onChange={handleNeed(
                                        "needs"
                                    )}
                                />
                            }
                            label="Personal grooming"
                        />
                        <FormControlLabel
                            value="Nasal tube feeding"
                            control={
                                <Checkbox
                                    checked={data.needs.includes(
                                        "Nasal tube feeding"
                                    )}
                                    onChange={handleNeed(
                                        "needs"
                                    )}
                                />
                            }
                            label="Nasal Tube Feeding"
                        />
                        <FormControlLabel
                            value="Bedsore care"
                            control={
                                <Checkbox
                                    checked={data.needs.includes(
                                        "Bedsore care"
                                    )}
                                    onChange={handleNeed(
                                        "needs"
                                    )}
                                />
                            }
                            label="Bed Sore care"
                        />
                        
                    </FormGroup>
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
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <label id="complete">Is Duty complete?</label>
                    <Select
                        labelId="complete"
                        id="complete"
                        value={data.is_complete}
                        label="Complete"
                        name="is_complete"
                        onChange={handleChange}
                    >
                        <MenuItem value={1}>Yes</MenuItem>
                        <MenuItem value={0}>No</MenuItem>
                        
                    </Select>
                </FormControl>

            </Box>
            <Divider />
            <Box sx={{ m: 1 }}>
                <Button variant='contained' color="error" onClick={editCase} fullWidth disabled={processing}>Update</Button>
            </Box>
        </>
            
    )
}
