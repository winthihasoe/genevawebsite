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

export class ChildCareTopicsStartFromHome extends Component {
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
                            {values.careTopics.map(careTopic => (
                                    <FormControlLabel
                                    key={careTopic}
                                    value={careTopic}
                                    control={
                                        <Checkbox
                                            checked={values.needs.includes(
                                                careTopic
                                            )}
                                            onChange={handleCareTopics(
                                                "needs"
                                            )}
                                        />
                                    }
                                    label={careTopic}
                                    />
                            ))} 
                            
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
                    { values.careTopics[0] && 
                        <Link href={route('finishBookingAndChooseCaregiver', values)}>
                                <Button variant="contained" style={styles.button}>Finish</Button>
                        </Link>
                    }
                </Box>
                <p>This is final step of booking, you have to choose a caregiver in next step.</p>
            </>
        );
    }
}

const styles = {
    
    button: {
        margin: 15,
    },
};

export default ChildCareTopicsStartFromHome;
