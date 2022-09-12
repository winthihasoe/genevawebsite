import { Link } from "@inertiajs/inertia-react";
// Copy from LoginSample
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from '@/Components/Navbar';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createStyled } from "@mui/system";
import { Box } from "@mui/material";

export default function UserLayout({ children }) {
    function Copyright(props) {
        return (
            
            <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                {...props}
            >
                <Typography variant="body1" color='text.primary' align='center'>
                Geneva Caregiver Training & Service
                </Typography>
            
                {"Copyright © "}
                <Link color="inherit" href="https://genevacaring.com/">
                    Geneva Co.,Ltd
                </Link>{" "}
                2022
            </Typography>
            
        );
    }
    const theme = createTheme();
    const useStyles = createStyled({
        logo: {
            maxWidth: 160,
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <Box sx={{height: '100vh'}}>
            <Container component="main" maxWidth="sm">

                <CssBaseline />
                <Box sx={{pt: 2}}>{children}</Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
            </Box>
        </ThemeProvider>
    );
}
