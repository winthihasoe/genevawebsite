import React from "react";
import TrainingOfficer from "@/Layouts/TrainingOfficer";
import { Head } from "@inertiajs/inertia-react";
import { Container, Typography } from "@mui/material";

export default function Students(props) {
    return (
        <TrainingOfficer
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Students" />
            <Container maxWidth='lg'>
                <Typography variant="h4">
                    All Students
                </Typography>
            </Container>
            
        </TrainingOfficer>
    );
}
