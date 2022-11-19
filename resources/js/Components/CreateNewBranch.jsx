import { useForm } from '@inertiajs/inertia-react';
import { Paper, TextField, Typography, Box, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import React, { useState } from 'react'

export default function CreateNewBranch(props) {
    const trainingOfficers = props.trainingOfficers;
    const { data, setData, post, progress, errors } = useForm({
        // personal information
        branch: "",
        address: "",
        phone: "",
        user_id: "",
        trainer_names: [],
        start_date: "",
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    }

    // Handle date change
    const handleDate = (input) => (e) => {
        setData({ ...data, [input]: e });
    };

    const handleSubmit = (e) => {
        post(route('storeBranch'), data);
        setData({
            branch: "",
            address: "",
            phone: "",
            user_id: "",
            trainer_names: '',
            start_date: "",
        })
    };

  return (
    
    <Paper elevation={10} sx={{ p: 2, mt: 1 }}>
        <Typography variant='h6' gutterBottom>Create a new branch</Typography>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <Box
                sx={{
                    p: 2,
                    display: "flex",
                    gap: 2,
                    flexWrap: "wrap",
                    justifyContent: 'center',
                }}
            >
                <TextField
                    label="Branch Name"
                    name="branch"
                    placeholder="Branch name"
                    type="text"
                    value={data.branch}
                    onChange={handleChange}
                />

                <TextField
                    label="Address"
                    name="address"
                    placeholder="Enter address"
                    type="text"
                    value={data.address}
                    onChange={handleChange}
                />

                <TextField
                    label="Phone"
                    name="phone"
                    placeholder="Enter phone"
                    type="text"
                    value={data.phone}
                    onChange={handleChange}
                />

                {/* This field must change to select type, getting data that is is_training_officer == true and loop through the select */}
                {/* There is user_id foreign id that will be the id of training officer */}
                {/* Once again also put the officer name in the officer name column for instant information when the user account is locked or changed */}
                <FormControl sx={{ minWidth: 230 }}>
                    <InputLabel id="user_id">Select Officer</InputLabel>
                    <Select
                        labelId="user_id"
                        id="user_id"
                        value={data.user_id}
                        label="Select Officer"
                        name="user_id"
                        onChange={handleChange}
                    >
                        { trainingOfficers.map(officer => (
                            <MenuItem value={officer.id}>{officer.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <TextField
                    label="Trainers"
                    name="trainer_names"
                    placeholder="Enter trainer name"
                    type="text"
                    value={data.trainer_names}
                    onChange={handleChange}
                    helperText="you can add later."
                />


                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Start Date"
                        value={data.start_date}
                        onChange={handleDate("start_date")}
                        renderInput={(params) => (
                            <TextField {...params} />
                        )}
                        sx= {{minWidth: 230}}
                    />
                </LocalizationProvider>

                <Button variant='contained' color='success' type='submit'>Create</Button>
            </Box>
        </form>
        <Typography variant='p'>
           <b>Tip</b>: When choosing "officer name", create a user account first and then an admin will change the role for this account to officer account. So you can find the respective officer name in the officer names list.
        </Typography>
    </Paper>
   
  )
}
