import React from 'react'
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import { Link } from '@inertiajs/inertia-react';
import { Typography } from '@mui/material';

export default function BackButton(props) {
    const name = props.name;
    console.log(name);
  return (
    <Link href={route(name)}>
        <KeyboardBackspaceRoundedIcon /> <Typography variant='overline'>back</Typography>
    </Link>
  )
}
