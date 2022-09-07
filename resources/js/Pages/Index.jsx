import { Head } from "@inertiajs/inertia-react";
import {  Container } from "@mui/system";
import * as React from "react";
import Navbar from "../Components/Navbar";
import Hero from "@/Components/Hero";
import OurServices from "@/Components/OurServices";
 

export default function Index() {
    return (
        <div>
            <Head title="Home" />
            <Navbar />
            <Hero />
            <Container>
                <OurServices />
            </Container>
        </div>
    );
}
