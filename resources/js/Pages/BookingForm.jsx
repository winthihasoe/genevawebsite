import UserLayout from '@/Layouts/UserLayout'
import ChildForm from '@/Components/ChildForm'
import { Container } from '@mui/system'
import React from 'react'

export default function BookingForm(props) {
  return (
    <UserLayout>
        <Container maxWidth='xs'>
            {props.care}
            <ChildForm />
        </Container>
    </UserLayout>
    )
}
