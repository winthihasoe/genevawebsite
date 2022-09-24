import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    Typography,
} from "@mui/material";
import React, { Component } from "react";
import Stack from "@mui/material/Stack";
import Input from "./Input";

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
        const { handleChange } = this.props;
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
                        
                        <Input
                        type="number"
                        name="age"
                        // value={data.age}
                        className="mt-1 block w-full"
                     
                        isFocused={true}
                        
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
                <Button
                    style={styles.button}
                    variant="contained"
                    onClick={this.continue}
                >
                    Continue
                </Button>
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
