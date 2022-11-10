import * as React from "react";
import TrainingOfficer from "@/Layouts/TrainingOfficer";
import { Head } from "@inertiajs/inertia-react";
import {
    Button,
    Container,
    Divider,
    InputLabel,
    MenuItem,
    Select,
    Typography,
    TextField,
    FormControl,
    Box,
} from "@mui/material";
import { useForm } from "@inertiajs/inertia-react";
import {
    DatePicker,
    LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";


export default function CreateCaregiver(props) {
    const { data, setData, post, progress, errors } = useForm({
        // personal information
        name: "",
        nrc: "",
        age: "",
        father_name: '',
        gender: "",
        weight: "",
        height: "",
        address: "",
        phone: "",
        image: null,

        // class information
        class: "",
        batch: "",
        join_date: "",
        first_payment: "",
        second_payment: '',
        third_payment: '',
        branch: '',

    });
    
    // For student image
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
        post("", data);
    };

    console.log(data);

    return (
        <TrainingOfficer auth={props.auth} errors={props.errors}>
            <Head title="Add student" />
            <Container
                maxWidth='md'
            >
                <Typography variant="h4">Add A New Student</Typography>

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
                                label="Student Name"
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
                            <TextField
                                label="Father Name"
                                name="father_name"
                                placeholder="father name"
                                type="text"
                                value={data.father_name}
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
                                placeholder="Height in feet & inches in decimal (5.2)"
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
                            
                            {/* Branch select from branches table  */}
                            {/* <FormControl sx={{ m: 1, minWidth: 120 }}>
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
                            </FormControl> */}

                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label="Joined Date"
                                    value={data.join_date}
                                    onChange={handleDate("join_date")}
                                    renderInput={(params) => (
                                        <TextField {...params} />
                                    )}
                                    sx= {{minWidth: 230}}
                                />
                            </LocalizationProvider>

                            
                            <FormControl sx={{ minWidth: 230 }}>
                                <InputLabel id="gender">Choose class</InputLabel>
                                <Select
                                    labelId="class"
                                    id="class"
                                    value={data.class}
                                    label="Class"
                                    name="class"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={"caregiver"}>Caregiver</MenuItem>
                                    <MenuItem value={"pharmacist_aid"}>Pharmacist aid</MenuItem>
                                    <MenuItem value={"online_class"}>Online class</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField
                                    label="Batch"
                                    name="batch"
                                    placeholder="Number only. eg. 2"
                                    type="number"
                                    value={data.batch}
                                    onChange={handleChange}
                            />

                            <TextField
                                    label="1st payment"
                                    name="first_payment"
                                    type="number"
                                    value={data.first_payment}
                                    onChange={handleChange}
                            />

                            
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
                        </Box>
                        


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
        </TrainingOfficer>
    );
}
const styles = {
    button: {
        margin: 13,
    },
};
