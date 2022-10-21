import React, { useState } from 'react';
import { usePage, useForm, Head } from '@inertiajs/inertia-react';
import Authenticated from '@/Layouts/Authenticated';
import { Typography, Button, Grid, TextField, Box } from '@mui/material';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import { Container } from '@mui/system';

export default function EditUserProfile (props) {
  const { user } = usePage().props.auth;
  const [selectedImage, setSelectedImage] = useState([]);
  const { data, setData, post, errors} = useForm({
    name: user.name,
    email: user.email,
    phone: user.phone,
    image: "",
    // need to change user password 
  });

  const onHandleChange = (event) => {
    const {name, value} = event.target;
    setData({...data, [name] : value});
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('user.update', user.id), data);
    setSelectedImage("");
  };

  return (
    <Authenticated auth={props.auth} errors={props.errors}>
      <Head title={`${user.name}`} />
      <Container maxWidth='xs'>
          <Typography variant='h3'>{user.name}</Typography>

           {/* If admin select a photo, Add photo button disappear  */}
                             
           <Box>
                {selectedImage.length == 1 ?  
                    selectedImage.map((image)=> (
                            <Box sx={{ margin: 3 }}>
                                <img src={image} alt="elder training photo"/>
                                <Button onClick={() => setSelectedImage("")}>Delete image</Button>
                            </Box>))
                            : (
                              <Box sx={{ width: 250, margin: 3, display: 'inline-block'}}>
                                  <img src={`/images/profiles/${user.profile_photo}`} alt="elder training photo"/>
                              </Box>)
                }
            </Box>

            {/* If admin select more than 1 photo, describe the following text  */}
            { selectedImage.length > 1 && <div>Please select only one photo</div>}
            { errors && errors.post_image}
      
            { selectedImage.length < 1 &&
            <label variant='outlined' className='change-photo'>
                Change photo
                <input className='add-photo-input' type='file' name="images" multiple onChange={onSelectFile} accept="image/png, image/jpeg, image/webp" />
            </label>}
            
                    <div>
                        <Label forInput="name" value="Name" />

                        <Input
                            type="text"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            handleChange={onHandleChange}
                            required
                        />
                    </div>

                    <div className="mt-4">
                        <Label forInput="email" value="Email" />

                        <Input
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            handleChange={onHandleChange}
                            required
                        />
                    </div>

                    <div className="mt-4">
                        <Label forInput="phone" value="Phone" />
                        <Input
                            type="text"
                            name="phone"
                            value={data.phone}
                            className="mt-1 block w-full"
                            autoComplete="phone"
                            handleChange={onHandleChange}
                            required
                        />
                    </div>

                    <div className='mt-4'>
                        <Button className="ml-4" onClick={handleSubmit} variant='contained' fullWidth>
                            Update
                        </Button>
                    </div>
                    <div className='mt-4'>
                        <Button className="ml-4" href={route('home')} variant='outlined' fullWidth>
                            Cancel
                        </Button>
                    </div>
                        
        </Container>
    </Authenticated>
  );
}
