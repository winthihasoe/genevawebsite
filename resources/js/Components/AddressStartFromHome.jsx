import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { Component } from "react";

export class AddressStartFromHome extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };
    render() {
        const { values, handleChange } = this.props;
        return (
            <Box
                component="form"
                sx={{
                    "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                textAlign='center'
            >
                <FormControl>
                    <TextField
                        label="Patient Name"
                        variant="standard"
                        onChange={handleChange("patient_name")}
                        defaultValue={values.patient_name}
                        required
                    />
                    <TextField
                        label="Address"
                        variant="standard"
                        onChange={handleChange("address")}
                        defaultValue={values.address}
                        required
                    />

                    <FormControl sx={{m:1}}>
                        <InputLabel id="demo-simple-select-label">City</InputLabel>
                        <Select
                            variant="standard"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="City"
                            value={values.city}
                            onChange={handleChange('city')}
                        >
                            <MenuItem value={'ygn'}>Yangon</MenuItem>
                            <MenuItem value={'mdy'}>Mandalay</MenuItem>
                            <MenuItem value={'mkn'}>Myitkyinar</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        label="Phone No."
                        variant="standard"
                        onChange={handleChange("phone")}
                        defaultValue={values.phone}
                        required
                    />
                    {values.patient_name && values.address && values.city && values.phone && 
                    <Button
                        style={styles.button}
                        variant="contained"
                        onClick={this.continue}
                    >
                        Continue
                    </Button>
                    }
                </FormControl>
                
            </Box>
        );
    }
}

const styles = {
    button: {
        margin: 15,
    },
};

export default AddressStartFromHome;
