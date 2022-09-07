import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function CaregiverCard({ caregiver }) {
    return (
        <Card sx={{ width: 160 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={`/images/profiles/${caregiver.image}`}
                    alt={caregiver.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="p" component="div">
                        {caregiver.name}
                    </Typography>
                    <Typography variant="p">{caregiver.level}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Show more
                </Button>
            </CardActions>
        </Card>
    );
}
