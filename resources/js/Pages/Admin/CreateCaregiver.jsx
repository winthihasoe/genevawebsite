import * as React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import Box from "@mui/joy/Box";
import {
    Button,
    Checkbox,
    Container,
    Divider,
    FormControl,
    FormControlLabel,
    FormGroup,
    InputLabel,
    MenuItem,
    Select,
    Typography,
    TextField,
} from "@mui/material";
import { useForm } from "@inertiajs/inertia-react";
import {
    DatePicker,
    LocalizationProvider,
    MobileDatePicker,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Stack } from "@mui/system";

export default function CreateCaregiver(props) {
    const { data, setData, post, progress } = useForm({
        name: "",
        age: "",
        weight: "",
        height: "",
        address: "",
        phone: "",
        skills: "",
        level: "",
        join_date: "",
        image: null,
        location: "",
        care: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    }

    // Handle date change
    const handleDate = (input) => (e) => {
        setData({ ...data, [input]: e });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/admin/create-caregiver", data);
    };

    const handleSkills = (input) => (e) => {
        const skills = data.skills;
        const index = skills.indexOf(e.target.value);
        if (index === -1) {
            setData({ ...data, [input]: [...skills, e.target.value] });
        } else {
            setData({
                ...data,
                [input]: skills.filter((topic) => topic !== e.target.value),
            });
        }
    };
    console.log(data);
    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <Head title="Caregivers" />
            <Container
                sx={{
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <Typography variant="h4">Add A New Caregiver</Typography>

                <Box
                    sx={{
                        p: 2,
                        display: "flex",
                        gap: 2,
                        alignItems: "center",
                        flexWrap: "wrap",
                    }}
                >
                    <form onSubmit={handleSubmit} encType="multipart/form-da?location=mdy&service=elderta">
                        <Box
                            sx={{
                                p: 2,
                                display: "flex",
                                gap: 2,
                                alignItems: "center",
                                flexWrap: "wrap",
                            }}
                        >
                            <TextField
                                label="Caregiver Name"
                                name="name"
                                placeholder="Enter a name"
                                type="text"
                                value={data.name}
                                onChange={handleChange}
                            />
                            <TextField
                                label="Age"
                                name="age"
                                placeholder="age in year"
                                type="number"
                                value={data.age}
                                onChange={handleChange}
                            />

                            <TextField
                                label="Weight"
                                name="weight"
                                placeholder="weight in pound"
                                type="number"
                                value={data.weight}
                                onChange={handleChange}
                            />
                            <TextField
                                label="Height"
                                name="height"
                                placeholder="Height in feet"
                                type="number"
                                value={data.height}
                                onChange={handleChange}
                            />
                            <TextField
                                label="Address"
                                name="address"
                                placeholder="Enter address"
                                type="text"
                                value={data.address}
                                onChange={handleChange}
                            />
                            
                            <InputLabel id="city">Select City</InputLabel>
                            <Select
                                labelId="city"
                                id="city"
                                value={data.location}
                                label="Select City"
                                name="location"
                                onChange={handleChange}
                            >
                                <MenuItem value={"ygn"}>Yangon</MenuItem>
                                <MenuItem value={"mdy"}>Mandalay</MenuItem>
                                <MenuItem value={"mkn"}>Myitkyina</MenuItem>
                            </Select>

                            <TextField
                                label="Phone"
                                name="phone"
                                placeholder="Enter Phone no."
                                type="text"
                                value={data.phone}
                                onChange={handleChange}
                            />

                            <InputLabel id="level">Select Level</InputLabel>
                            <Select
                                labelId="level"
                                id="level"
                                value={data.level}
                                label="Select Level"
                                name="level"
                                onChange={handleChange}
                            >
                                <MenuItem value={"semi"}>Semi</MenuItem>
                                <MenuItem value={"skilled"}>Skilled</MenuItem>
                                <MenuItem value={"advanced"}>Advanced</MenuItem>
                            </Select>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label="Joined Date"
                                    value={data.join_date}
                                    onChange={handleDate("join_date")}
                                    renderInput={(params) => (
                                        <TextField {...params} />
                                    )}
                                />
                            </LocalizationProvider>

                            {/* Profile Picture  */}

                            <Stack spacing={1}>
                                <InputLabel id="profile">
                                    Choose a profile picture
                                </InputLabel>
                                <TextField
                                    type="file"
                                    name="image"
                                    onChange={(e) =>
                                        setData("image", e.target.files[0])
                                    }
                                />
                                {progress && (
                                    <progress
                                        value={progress.percentage}
                                        max="100"
                                    >
                                        {progress.percentage}%
                                    </progress>
                                )}
                            </Stack>
                        </Box>
                        <FormGroup>
                            <InputLabel id="level">Field of Care</InputLabel>
                            <Select
                                labelId="level"
                                id="care"
                                value={data.care}
                                label="Select Care"
                                name="care"
                                onChange={handleChange}
                            >
                                <MenuItem value={"child"}>Child Care</MenuItem>
                                <MenuItem value={"elder"}>Elder Care</MenuItem>
                                <MenuItem value={"elder_child"}>Elder Care & Child Care</MenuItem>
                            </Select>

                            <FormControlLabel
                                value="personal grooming"
                                control={
                                    <Checkbox
                                        checked={data.skills.includes(
                                            "personal grooming"
                                        )}
                                        onChange={handleSkills("skills")}
                                    />
                                }
                                label="Personal grooming"
                            />
                            <FormControlLabel
                                value="breastfeeding"
                                control={
                                    <Checkbox
                                        checked={data.skills.includes(
                                            "breastfeeding"
                                        )}
                                        onChange={handleSkills("skills")}
                                    />
                                }
                                label="Breast Feeding"
                            />
                            <FormControlLabel
                                value="bottle feeding"
                                control={
                                    <Checkbox
                                        checked={data.skills.includes(
                                            "bottle feeding"
                                        )}
                                        onChange={handleSkills("skills")}
                                    />
                                }
                                label="Bottle Feeding"
                            />
                        </FormGroup>
                        
                        <Button
                            style={styles.button}
                            variant="contained"
                            type="submit"
                        >
                            Create
                        </Button>
                    </form>
                </Box>

                <Divider light />
                <Box
                    sx={{
                        p: 2,
                        display: "flex",
                        gap: 2,
                        alignItems: "center",
                        flexWrap: "wrap",
                    }}
                ></Box>
            </Container>
        </Authenticated>
    );
}
const styles = {
    button: {
        margin: 15,
    },
};
