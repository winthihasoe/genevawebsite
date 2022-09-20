import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Box } from "@mui/system";

export default function CaregiverCard({ caregiver }) {
    return (
        
            <Card sx={{ width: 160 }} style={{ height: '100%' }}>
                <CardActionArea href={route('caregiver', caregiver.id)}>
                    <Box sx={{height: 140, overflow: 'hidden'}}>
                    <CardMedia
                        sx={{p: 0.5}}
                        component="img"
                        image={`/images/profiles/${caregiver.image}`}
                        alt={caregiver.name}
                        
                    />
                    </Box>
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
