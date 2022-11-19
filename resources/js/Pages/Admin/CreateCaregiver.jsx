import * as React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import {
    Button,
    Checkbox,
    Container,
    Divider,
    FormControlLabel,
    FormGroup,
    InputLabel,
    MenuItem,
    Select,
    Typography,
    TextField,
    Grid,
    FormControl,
    Box,
} from "@mui/material";
import { useForm } from "@inertiajs/inertia-react";
import {
    DatePicker,
    LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Stack } from "@mui/system";


export default function CreateCaregiver(props) {
    const { data, setData, post, progress, errors } = useForm({
        name: "",
        nrc: "",
        age: "",
        gender: "",
        weight: "",
        height: "",
        address: "",
        phone: "",
        skills: "",
        level: "",
        join_date: "",
        image: null,
        location: "",
        care: "",
    });

    // For Caregiver profile image
    const [selectedImage, setSelectedImage] = React.useState([]);
    const onSelectFile = (e) => {
        const selectedOneImage = e.target.files[0];
        const selectedFile = e.target.files;
        const selectedFileArray = Array.from(selectedFile);
        const imageArray = selectedFileArray.map(file => {
            return URL.createObjectURL(file);
        });
        setSelectedImage(imageArray);
        setData({...data, image: selectedOneImage});
    }
  
    
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

    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <Head title="Add caregiver" />
            <Container
                maxWidth='md'
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
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
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
                                label="NRC No."
                                name="nrc"
                                placeholder="x/xxxxxx(N)xxxxxx"
                                type="text"
                                value={data.nrc}
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
                            <FormControl sx={{ minWidth: 230 }}>
                            <InputLabel id="gender">Gender</InputLabel>
                            <Select
                                labelId="gender"
                                id="gender"
                                value={data.gender}
                                label="Gender"
                                name="gender"
                                onChange={handleChange}
                            >
                                <MenuItem value={"male"}>Male</MenuItem>
                                <MenuItem value={"female"}>Female</MenuItem>
                                
                            </Select>
                            </FormControl>


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

                            <TextField
                                label="Phone"
                                name="phone"
                                placeholder="Enter Phone no."
                                type="text"
                                value={data.phone}
                                onChange={handleChange}
                            />
                            
                            <FormControl sx={{ minWidth: 230 }}>
                            <InputLabel id="city">Select City</InputLabel>
                            <Select
                                labelId="city"
                                id="location"
                                value={data.location}
                                label="Location"
                                name="location"
                                onChange={handleChange}
                            >
                                <MenuItem value={"ygn"}>Yangon</MenuItem>
                                <MenuItem value={"mdy"}>Mandalay</MenuItem>
                                <MenuItem value={"mkn"}>Myitkyina</MenuItem>
                            </Select>
                            </FormControl>

                            <FormControl sx={{ minWidth: 230 }}>
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
                            </FormControl>

                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Joined Date"
                                    value={data.join_date}
                                    onChange={handleDate("join_date")}
                                    renderInput={(params) => (
                                        <TextField {...params} />
                                    )}
                                />
                            </LocalizationProvider>
                           
                            
                        </Box>
                        {/* Profile Picture  */}
                        {/* If admin select a photo, Add photo button disappear  */}

                        <Box sx={{ maxWidth: 230 }}>
                            {selectedImage.length == 1 &&
                                selectedImage.map((image)=> (
                                        <Box sx={{ margin: 3 }}>
                                            <img src={image} alt="elder training photo"/>
                                            <Button onClick={() => setSelectedImage("")}>Delete image</Button>
                                        </Box>))
                                        
                            }
                        </Box>
                            {/* If admin select more than 1 photo, describe the following text  */}
                        { selectedImage.length > 1 && <div>Please select only one photo</div>}
                
                        { selectedImage.length == 1 ? '' :
                        <label variant='outlined' className='change-photo'>
                            Select photo
                            <input className='add-photo-input' type='file' name="images" multiple onChange={onSelectFile} accept="image/png, image/jpeg, image/webp" />
                        </label>}
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
                        </FormGroup>

{/* ------------ Loop topics from CareTopic migration ----------------------- */}
                            {/* If field of care is selected 'Elder care'  */}
                                {data.care == 'elder' ? (
                                    <Grid container sx={{margin: 2}}>
                                        <Grid item md={12} xs={12}>
                                        <Typography variant="h6">Elder Care Topic</Typography>
                                        {props.elderCareTopics.map(topic=>(
                                            <FormControlLabel
                                                key={topic.id}
                                                value={topic.topic}
                                                control={
                                                    <Checkbox
                                                        checked={data.skills.includes(
                                                            topic.topic
                                                        )}
                                                        onChange={handleSkills("skills")}
                                                    />
                                                }
                                                label={topic.topic}
                                            />
                                        ))}
                                        </Grid>
                                    </Grid>
                                ) : "" }
                            {/* If field of care is selected 'Child care'  */}
                                {data.care == 'child' ? (
                                    <Grid container sx={{margin: 2}}>
                                        <Grid item md={12} xs={12}>
                                            <Typography variant="h6">Child Care Topic</Typography>
                                            {props.childCareTopics.map(topic=>(
                                                <FormControlLabel
                                                    key={topic.id}
                                                    value={topic.topic}
                                                    control={
                                                        <Checkbox
                                                            checked={data.skills.includes(
                                                                topic.topic
                                                            )}
                                                            onChange={handleSkills("skills")}
                                                        />
                                                    }
                                                    label={topic.topic}
                                                />
                                            ))}
                                        </Grid>
                                    </Grid>
                                ) : ''}
                            {/* If field of care is selected 'Elder care and Child care' */}
                                {data.care == 'elder_child' ? (
                                    <Grid container sx={{margin: 2}}>
                                        <Grid item md={6} xs={12}>
                                            <Typography variant="h6">Elder Care Topic</Typography>
                                            {props.elderCareTopics.map(topic=>(
                                                <FormControlLabel
                                                    key={topic.id}
                                                    value={topic.topic}
                                                    control={
                                                        <Checkbox
                                                            checked={data.skills.includes(
                                                                topic.topic
                                                            )}
                                                            onChange={handleSkills("skills")}
                                                        />
                                                    }
                                                    label={topic.topic}
                                                />
                                            ))}
                                        </Grid>
                                        <Grid item md={6} xs={12}>
                                            <Typography variant="h6">Child Care Topic</Typography>
                                            {props.childCareTopics.map(topic=>(
                                                <FormControlLabel
                                                    key={topic.id}
                                                    value={topic.topic}
                                                    control={
                                                        <Checkbox
                                                            checked={data.skills.includes(
                                                                topic.topic
                                                            )}
                                                            onChange={handleSkills("skills")}
                                                        />
                                                    }
                                                    label={topic.topic}
                                                />
                                            ))}
                                        </Grid>
                                    </Grid>
                                ) : ''}
     
                        <Divider />
                        <Button
                            style={styles.button}
                            variant="contained"
                            type="submit"
                        >
                            Create
                        </Button>
                    </form>
                </Box>
            </Container>
        </Authenticated>
    );
}
const styles = {
    button: {
        margin: 13,
    },
};
