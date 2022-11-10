import { useForm } from '@inertiajs/inertia-react';
import { Paper, TextField, Typography, Box, Button } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import React, { useState } from 'react'

export default function CreateNewBranch() {
    const { data, setData, post, progress, errors } = useForm({
        // personal information
        branch: "",
        address: "",
        phone: "",
        officer_name: "",
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
        e.preventDefault();
        post(route('storeBranch'), data);
        setData({
            branch: "",
            address: "",
            phone: "",
            officer_name: "",
            trainer_names: [],
            start_date: "",
        })
    };

    console.log(data);

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

                <TextField
                    label="Officer"
                    name="officer_name"
                    placeholder="Enter officer name"
                    type="text"
                    value={data.officer_name}
                    onChange={handleChange}
                />

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
        
    </Paper>
   
  )
}
