import { Box, Button, TextField } from "@mui/material";
import React, { Component } from "react";

export class Address extends Component {
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
                <div>
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
                    <TextField
                        label="City"
                        variant="standard"
                        onChange={handleChange("city")}
                        defaultValue={values.city}
                        required
                    />
                    <TextField
                        label="Phone No."
                        variant="standard"
                        onChange={handleChange("phone")}
                        defaultValue={values.phone}
                        required
                    />
                </div>
                {values.patient_name && values.address && values.city && values.phone && 
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

export default Address;
