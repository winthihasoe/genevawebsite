import { Link } from "@inertiajs/inertia-react";
// Copy from LoginSample
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createStyled } from "@mui/system";

export default function Guest({ children }) {
    function Copyright(props) {
        return (
            <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                {...props}
            >
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
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar
                        sx={{
                            m: 1,
                            backgroundColor: "white",
                            width: 90,
                            height: 90,
                        }}
                    >
                        <img
                            src="images/logo.png"
                            alt="logo"
                            className={useStyles.logo}
                        />
                    </Avatar>

                    <Box sx={{ mt: 1 }}>{children}</Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}
