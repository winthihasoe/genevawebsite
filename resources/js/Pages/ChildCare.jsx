import React from "react";
import Navbar from "@/Components/Navbar";
import ChildForm from "@/Components/ChildForm";
import { Container } from "@mui/system";
import { Box, createTheme, Typography } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { red } from "@mui/material/colors";

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
            <Navbar />
            <Container>
                <ThemeProvider theme={theme}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Typography variant="h3">Please fill Form</Typography>
                        <ChildForm />
                    </Box>
                </ThemeProvider>
            </Container>
        </>
    );
}
