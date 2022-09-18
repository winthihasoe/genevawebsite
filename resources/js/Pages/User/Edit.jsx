import React from 'react';
import { usePage, useForm, Head } from '@inertiajs/inertia-react';
import UserLayout from '@/Layouts/UserLayout';
import { Typography, Button } from '@mui/material';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Container } from '@mui/system';

export default function Edit (props) {
  const { user } = usePage().props.auth;
  const { data, setData, put, errors} = useForm({
    name: user.name,
    email: user.email,
    phone: user.phone,
    // need to change user password 
  })

  const onHandleChange = (event) => {
    const {name, value} = event.target;
    setData({...data, [name] : value});
  };


  const submit = (e) => {
    e.preventDefault();
    put(route('user.update', user.id), data);
  };

  return (
    <UserLayout>
      <Head title={`${user.name}`} />
      <Container maxWidth='xs'>
                <Typography variant='h3'>{user.name}</Typography>
                <ValidationErrors errors={errors} />

                <form onSubmit={submit}>
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
                        <Button className="ml-4" type='submit' variant='outlined' fullWidth>
                            Update
                        </Button>
                    </div>
                        
                </form>
        </Container>
    </UserLayout>
  );
}
