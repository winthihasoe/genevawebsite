import React from "react";
import Navbar from "@/Components/Navbar";
import ChildForm from "@/Components/ChildForm";
import { Container } from "@mui/system";
import { Box, createTheme, Typography } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { red } from "@mui/material/colors";
import { Head } from "@inertiajs/inertia-react";

const theme = createTheme({
    palette: {
        primary: {
            main: red[500],
        },
    },
});

export default function ChildCare() {
    return (
        <>
            <Head title="Booking for baby" />
            <Navbar />
            <Container maxWidth='xs' sx={{mt: 5}}>
                <ThemeProvider theme={theme}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Typography variant="h3">Please fill Form</Typography>
                        <Typography variant="overline">We care for your <b>child</b></Typography>
                        <ChildForm />
                    </Box>
                </ThemeProvider>
            </Container>
        </>
    );
}
