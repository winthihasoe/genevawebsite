import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Link, useForm } from "@inertiajs/inertia-react";
import Input from "./Input";
import Label from "./Label";
import Image from '/images/cover.jpg'
import { FormControl, InputLabel, MenuItem, Select, Typography, Button } from "@mui/material";

const style = {
    paperContainer: {
        backgroundImage: `url(${Image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '600px',
        width: '100%',
    }
}

export default function Hero() {
    const { data, setData, get, processing, errors, reset } = useForm({
        location: "",
        care: "",
    });

    const handleChange = (e) =>{
        e.preventDefault();
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    const handleSubmit =e => {
        e.preventDefault();
        get('/show-caregivers', data)
    }
    return (
        <>
            <div style={style.paperContainer} id="home">
                <Grid container sx={{ maxWidth:900, margin: 'auto'}} >
                    <Grid item xs={12} sm={6} md={5} lg={5} xl={5} sx={{marginTop : 7, padding: 6}} >
                        <Paper sx={{padding: '50px 20px'}} >
                            <Typography variant="h6" gutterBottom>Find Your Caregiver</Typography>
                            <form onSubmit={handleSubmit}>
                                <Box sx={{ minWidth: 200, marginBottom: 2 }}>
                                    <Label forInput="service" value="Where are you located?"/>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">City</InputLabel>
                                        <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="City"
                                        value={data.location}
                                        onChange={handleChange}
                                        name='location'
                                        >
                                        <MenuItem value={'ygn'}>Yangon</MenuItem>
                                        <MenuItem value={'mdy'}>Mandalay</MenuItem>
                                        <MenuItem value={'mkn'}>Myitkyinar</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Box sx={{ minWidth: 200,  marginBottom: 2 }}>
                                    <Label forInput="service" value="Select your service"/>
                                    <FormControl fullWidth>
                                        
                                        <InputLabel id="demo-simple-select-label">Service</InputLabel>
                                        <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Service"
                                        value={data.care}
                                        onChange={handleChange}
                                        name='care'
                                        >
                                        <MenuItem value={'baby'}>Baby Care</MenuItem>
                                        <MenuItem value={'elder'}>Elder Care</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>

                                {/* To show "Get Care Now" button when location and care is inputed  */}
                                {data.location && data.care && 
                                    <Box textAlign='center' sx={{marginTop: 2}}>
                                        <Button processing={processing} variant='contained' type='submit'>Get care now</Button>
                                    </Box>
                                }
                            </form>
                        </Paper>
                    </Grid>
                </Grid>      
            </div>
        </>
    );
}
