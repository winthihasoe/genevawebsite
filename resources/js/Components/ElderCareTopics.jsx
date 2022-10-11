import React, { Component } from "react";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";
import { Link } from "@inertiajs/inertia-react";

export class ElderCareTopics extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };
    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    };
    render() {
        const { values, handleCareTopics } = this.props;
        return (
            <>
                <Box sx={{ display: "flex" }}>
                    <FormControl
                        sx={{ m: 3 }}
                        component="fieldset"
                        variant="standard"
                    >
                        <FormLabel component="legend">
                            Check following
                        </FormLabel>
                        <FormGroup>
                            <FormControlLabel
                                value="Personal grooming"
                                control={
                                    <Checkbox
                                        checked={values.elderCareTopics.includes(
                                            "Personal grooming"
                                        )}
                                        onChange={handleCareTopics(
                                            "elderCareTopics"
                                        )}
                                    />
                                }
                                label="Personal grooming"
                            />
                            <FormControlLabel
                                value="Nasal tube feeding"
                                control={
                                    <Checkbox
                                        checked={values.elderCareTopics.includes(
                                            "Nasal tube feeding"
                                        )}
                                        onChange={handleCareTopics(
                                            "elderCareTopics"
                                        )}
                                    />
                                }
                                label="Nasal Tube Feeding"
                            />
                            <FormControlLabel
                                value="Bedsore care"
                                control={
                                    <Checkbox
                                        checked={values.elderCareTopics.includes(
                                            "Bedsore care"
                                        )}
                                        onChange={handleCareTopics(
                                            "elderCareTopics"
                                        )}
                                    />
                                }
                                label="Bed Sore care"
                            />
                        </FormGroup>
                        <FormHelperText>Be careful</FormHelperText>
                    </FormControl>
                </Box>
                <Box sx={{ display: "flex" }}>
                    <Button
                        style={styles.button}
                        variant="outlined"
                        onClick={this.back}
                    >
                        Back
                    </Button>
                    { values.elderCareTopics[0] && 
                        <Link href={route('finishBooking', {values})}>
                                <Button variant="contained" style={styles.button}>Finish</Button>
                        </Link>
                    }
                </Box>
                <p>This is final step of booking, Thank you.</p>
            </>
        );
    }
}

const styles = {
    
    button: {
        margin: 15,
    },
};

export default ElderCareTopics;
