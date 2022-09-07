import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Link, useForm } from "@inertiajs/inertia-react";
import Input from "./Input";
import Label from "./Label";
import Image from '../../../public/images/cover.jpg'
import { Typography } from "@mui/material";
import Button from "./Button";

const style = {
    paperContainer: {
        backgroundImage: `url(${Image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '450px',
        width: '100%',
    }
}

export default function Hero() {
    const { data, setData, post, processing, errors, reset } = useForm({
        location: "",
        service: "",
    });
    return (
        <>
            <div style={style.paperContainer}>
                <Grid container sx={{ maxWidth:900, margin: 'auto'}} >
                    <Grid item xs={12} sm={8} md={4} xl={4} sx={{marginTop : 7, padding: 6}} >
                        <Paper sx={{padding: '50px 20px'}} >
                            <Typography variant="h6" gutterBottom>Find Your Caregiver</Typography>
                            <form>
                                <div className="mb-4">
                                    <Label forInput="location" value="Where are you located?" />
                                    <Input 
                                        type="text"
                                        name="email"
                                        className="mt-1 block w-full"
                                    />
                                </div>
                                <div>
                                    <Label forInput="service" value="Choose a Service" />
                                    <Input 
                                        type="text"
                                        name="service"
                                        className="mt-1 block w-full"
                                    />
                                </div>
                                <Box textAlign='center' sx={{marginTop: 2}}>
                                    <Button processing={processing}>Get care now</Button>
                                </Box>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>      
            </div>
        </>
    );
}
