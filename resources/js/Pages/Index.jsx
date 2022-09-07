import { Head } from "@inertiajs/inertia-react";
import { Grid, Paper, styled } from "@mui/material";
import { Box, Container } from "@mui/system";
import * as React from "react";
import Navbar from "../Components/Navbar";
import Hero from "@/Components/Hero";
 

export default function Index() {
    return (
        <div>
            <Head title="Home" />
            <Navbar />
            <Hero />
            <Container>
            </Container>
        </div>
    );
}
