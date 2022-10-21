import Label from '@/Components/Label'
import Authenticated from '@/Layouts/Authenticated'
import { TextField, Typography, Box, Button, Stack, FormControl, TextareaAutosize } from '@mui/material'
import { Container } from '@mui/system'
import React, { useState } from 'react';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { Head, useForm } from '@inertiajs/inertia-react';

export default function ElderTrainingCustomize(props) {
    const [selectedImage, setSelectedImage] = useState([]);
    const { data, setData, errors, post } = useForm({
        post_image: '',
        post_title: '',
        post_body: '',
        post_footer: '',
    });

    const onSelectFile = (e) => {
        const selectedOneImage = e.target.files[0];
        const selectedFile = e.target.files;
        const selectedFileArray = Array.from(selectedFile);
        const imageArray = selectedFileArray.map(file => {
            return URL.createObjectURL(file);
        });
        setSelectedImage(imageArray);

        // If you want to select multiple images, use the following commented code
        // const selectedFilesArray = Array.from(selectedFiles);
        // const imagesArray = selectedFilesArray.map(file => {
        //     return URL.createObjectURL(file);
        // });
        // setSelectedImages((prevImages) => prevImages.concat(imagesArray));

        setData({...data, post_image: selectedOneImage});
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setData({...data, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('storeElderTrainingPost'),data); 
    }

    console.log(data);
    console.log(selectedImage);
  return (
    <Authenticated auth={props.auth} errors={props.errors}>
        <Head title='Post elder training' />
        <Container maxWidth="md">
            <Typography variant='h6' gutterBottom>Edit Elder Training page</Typography>
            <Box sx={{ padding: 2, width: "100%", borderRadius: 3, backgroundColor: '#cfaaf7' }}>

                {/* If admin select a photo, Add photo button disappear  */}
                { selectedImage.length < 1 &&
                <label className='add-photo-btn'>
                    <AddPhotoAlternateIcon />
                    Add Training photo
                    <input className='add-photo-input' type='file' name="images" multiple onChange={onSelectFile} accept="image/png, image/jpeg, image/webp" />
                </label>}
                
                <Box>
                    {selectedImage.length == 1 ?  
                        selectedImage.map((image)=> (
                                <Box sx={{ width: 250, margin: 3, display: 'inline-block'}}>
                                    <img src={image} alt="elder training photo"/>
                                    <Button onClick={() => setSelectedImage("")}>Delete image</Button>
                                </Box>))
                                : "" 
                    }
                </Box>

                {/* If admin select more than 1 photo, describe the following text  */}
                { selectedImage.length > 1 && <div>Please select only one photo</div>}
                { errors && errors.post_image}

                <Stack spacing={3} sx={{ m: 1, minWidth: 160}}>
                    
                    <TextField
                        label="Post title"
                        name='post_title'
                        onChange={handleChange}
                        defaultValue={data.post_title}
                        required
                    />
                    { errors && errors.post_title}
                    
                    <TextareaAutosize
                        minRows={3}
                        name='post_body'
                        onChange={handleChange}
                        aria-label="maximum height"
                        placeholder="Post body text"
                        defaultValue={data.post_body}
                        style={{ width: '100%' }}
                    />
                    { errors && errors.post_body}
                    
                    <TextField
                        label="Footer (optional)"
                        name='post_footer'
                        onChange={handleChange}
                        defaultValue={data.post_footer}
                    />
                    <Button onClick={handleSubmit}>Post</Button>
                </Stack>
            </Box>        
            
        </Container>

    </Authenticated>
  )
}
