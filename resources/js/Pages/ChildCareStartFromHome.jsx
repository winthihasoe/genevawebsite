import React from "react";
import Navbar from "@/Components/Navbar";
import { Container } from "@mui/system";
import { Box, createTheme, Typography } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { red } from "@mui/material/colors";
import { Head } from "@inertiajs/inertia-react";
import { ChildFormStartFromHome } from "@/Components/ChildFormStartFromHome";

const theme = createTheme({
    palette: {
        primary: {
            main: red[500],
        },
    },
});

export default function ChildCareStartFromHome(props) {
    const careTopics = props.careTopics;

    return (
        <>
            <Head title="Booking for baby care" />
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
                        <Typography variant="overline">We care for your <b>Baby</b></Typography>
                        <ChildFormStartFromHome careTopics={careTopics} />
                    </Box>
                </ThemeProvider>
            </Container>
        </>
    );
}
