import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    TextField,
    Typography,
} from "@mui/material";
import React, { Component } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import Stack from "@mui/material/Stack";
import { MobileDatePicker } from "@mui/x-date-pickers";

export class Duration extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };
    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    };
    render() {
        const { values, handleChange, handleDate } = this.props;
        return (
            <Box
                component="form"
                sx={{
                    "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
            >
                <Typography variant="h6">When do you need care?</Typography>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack spacing={3}>
                        <MobileDatePicker
                            label="Starting Date"
                            value={values.startDate}
                            onChange={handleDate("startDate")}
                            renderInput={(params) => <TextField {...params} />}
                        />
                        <MobileDatePicker
                            label="Ending Date"
                            value={values.endDate}
                            onChange={handleDate("endDate")}
                            renderInput={(params) => <TextField {...params} />}
                        />
                        <FormControl>
                            <FormLabel id="demo-row-radio-buttons-group-label">
                                What duty do you need?
                            </FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                onChange={handleChange("dutyAssign")}
                            >
                                <FormControlLabel
                                    value="day"
                                    control={<Radio />}
                                    label="Day (Today 7am - 7pm)"
                                />
                                <FormControlLabel
                                    value="night"
                                    control={<Radio />}
                                    label="Night (Today 7pm - Tomorrow 7am)"
                                />
                                <FormControlLabel
                                    value="24hr"
                                    control={<Radio />}
                                    label="24 hours"
                                />
                            </RadioGroup>
                        </FormControl>
                    </Stack>
                </LocalizationProvider>
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

export default Duration;
