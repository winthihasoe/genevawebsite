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
                                value="personal_grooming"
                                control={
                                    <Checkbox
                                        checked={values.elderCareTopics.includes(
                                            "personal_grooming"
                                        )}
                                        onChange={handleCareTopics(
                                            "elderCareTopics"
                                        )}
                                    />
                                }
                                label="Personal grooming"
                            />
                            <FormControlLabel
                                value="nasal_tube_feeding"
                                control={
                                    <Checkbox
                                        checked={values.elderCareTopics.includes(
                                            "nasal_tube_feeding"
                                        )}
                                        onChange={handleCareTopics(
                                            "elderCareTopics"
                                        )}
                                    />
                                }
                                label="Nasal Tube Feeding"
                            />
                            <FormControlLabel
                                value="bedsore_care"
                                control={
                                    <Checkbox
                                        checked={values.elderCareTopics.includes(
                                            "bedsore_care"
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

                    <Button style={styles.button} variant="contained">
                        <Link href="/child-care/choose-caregiver">
                            Continue
                        </Link>
                    </Button>
                </Box>
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
