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

export class ChildAge extends Component {
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
                <Typography variant="h6">Who Needs Care?</Typography>

                <Stack spacing={3}>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">
                            Please choose baby age.
                        </FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="col-radio-buttons-group"
                            onChange={handleChange("childAge")}
                        >
                            <FormControlLabel
                                value="1"
                                control={<Radio />}
                                label="0 - 1 month"
                            />
                            <FormControlLabel
                                value="3"
                                control={<Radio />}
                                label="1 - 3 months"
                            />
                            <FormControlLabel
                                value="6"
                                control={<Radio />}
                                label="3 - 6 months"
                            />
                            <FormControlLabel
                                value="12"
                                control={<Radio />}
                                label="6 - 12 months"
                            />
                            <FormControlLabel
                                value="13"
                                control={<Radio />}
                                label="more than 1 year"
                            />
                        </RadioGroup>
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

export default ChildAge;
