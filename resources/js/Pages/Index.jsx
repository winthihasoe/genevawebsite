import { Head } from "@inertiajs/inertia-react";
import {  Container } from "@mui/system";
import * as React from "react";
import Navbar from "../Components/Navbar";
import Hero from "@/Components/Hero";
import OurServices from "@/Components/OurServices";
import AboutCompany from "@/Components/AboutCompany";
import { Box } from "@mui/material";
import OurCommitment from "@/Components/OurCommitment";
import Pricing from "@/Components/Pricing";
 

export default function Index() {
    return (
        <div>
            <Head title="Home" />
            <Navbar />
            <Hero />
            <Container>
                <OurServices />
            </Container>
            <Box sx={{backgroundColor: '#FBF8F1', padding: 2}}>
                <Container>
                    <AboutCompany />
                </Container>
            </Box>
            <Box sx={{backgroundColor: '#54BAB9', padding: 2}}>
                <Container>
                    <OurCommitment />
                    <Pricing />
                </Container>
            </Box>
        </div>
    );
}
