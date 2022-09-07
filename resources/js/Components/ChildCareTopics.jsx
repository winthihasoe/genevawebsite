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

export class ChildCareTopics extends Component {
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
                                        checked={values.childCareTopics.includes(
                                            "personal_grooming"
                                        )}
                                        onChange={handleCareTopics(
                                            "childCareTopics"
                                        )}
                                    />
                                }
                                label="Personal grooming"
                            />
                            <FormControlLabel
                                value="breastfeeding"
                                control={
                                    <Checkbox
                                        checked={values.childCareTopics.includes(
                                            "breastfeeding"
                                        )}
                                        onChange={handleCareTopics(
                                            "childCareTopics"
                                        )}
                                    />
                                }
                                label="Breast Feeding"
                            />
                            <FormControlLabel
                                value="bottle_feeding"
                                control={
                                    <Checkbox
                                        checked={values.childCareTopics.includes(
                                            "bottle_feeding"
                                        )}
                                        onChange={handleCareTopics(
                                            "childCareTopics"
                                        )}
                                    />
                                }
                                label="Bottle Feeding"
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

export default ChildCareTopics;
