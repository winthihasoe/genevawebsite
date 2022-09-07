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
            >
                <div>
                    <TextField
                        label="Address"
                        variant="standard"
                        onChange={handleChange("address")}
                        defaultValue={values.address}
                    />
                    <TextField
                        id="standard-error-helper-text"
                        label="City"
                        helperText="Incorrect entry."
                        variant="standard"
                        onChange={handleChange("city")}
                        defaultValue={values.city}
                    />
                    <TextField
                        id="standard-error-helper-text"
                        label="Phone No."
                        helperText="Incorrect entry."
                        variant="standard"
                        onChange={handleChange("phone")}
                        defaultValue={values.phone}
                    />
                </div>
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

export default Address;
