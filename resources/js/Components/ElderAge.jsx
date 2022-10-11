import {
    Box,
    Button,
    FormControl,
    TextField,
    Typography,
} from "@mui/material";
import React, { Component } from "react";
import Stack from "@mui/material/Stack";

export class ElderAge extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };
    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    };
    render() {
        const { values, handleChange } = this.props;
        return (
            <Box
                component="form"
                sx={{
                    "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
            >
                <Typography variant="h6" gutterBottom>Please fill the patient age</Typography>

                <Stack spacing={3}>
                    <FormControl>
                        
                        <TextField
                        type="number"
                        name="age"
                        value={values.elderAge}
                        className="mt-1 block w-full"
                        onChange={handleChange('elderAge')}
                        
                    />
                    </FormControl>
                </Stack>
                <Button
                    style={styles.button}
                    variant="outlined"
                    onClick={this.back}
                >
                    Back
                </Button>
                { values.elderAge && 
                    <Button
                        style={styles.button}
                        variant="contained"
                        onClick={this.continue}
                    >
                        Continue
                    </Button>
                }
            </Box>
        );
    }
}

const styles = {
    button: {
        margin: 15,
    },
};

export default ElderAge;
