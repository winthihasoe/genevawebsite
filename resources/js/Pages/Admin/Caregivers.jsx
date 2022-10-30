import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import CaregiverCardAdmin from "@/Components/CaregiverCardAdmin";

export default function Caregivers(props) {
    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <Head title="Caregivers" />

            {/* Plan --- Card or List show style  */}

            <Container
                maxWidth="md"
            >
                <div className="title">
                    <Typography variant="h4">Caregivers</Typography>
                    <Link href="create-caregiver" className="btn">
                        Add a new caregiver
                    </Link>
                </div>

                <Box
                    sx={{
                        p: 1,
                        display: "flex",
                        gap: 1,
                        flexWrap: "wrap",
                    }}
                >
                    {props.caregivers.map((caregiver) => (
                        <div className="my-5">
                            <CaregiverCardAdmin caregiver={caregiver} />
                        </div>
                    ))}
                </Box>
            </Container>
        </Authenticated>
    );
}
