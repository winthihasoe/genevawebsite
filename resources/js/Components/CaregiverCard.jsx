import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Chip } from "@mui/material";
import { Box } from "@mui/system";
import { Link, usePage } from "@inertiajs/inertia-react";

export default function CaregiverCard(props) {
    const caregiver = props.caregiver;
    const care = usePage().props.care;
    const location = usePage().props.location;
    return (
        
            <Card sx={{ width: 160 }} style={{ height: '100%' }}>
                <Link href={route('caregiver', [caregiver.id, {'care': care, 'location': location}])}>
                    <CardActionArea>
                        <Box sx={{height: 140, overflow: 'hidden'}}>
                        <CardMedia
                            sx={{p: 0.2}}
                            component="img"
                            image={`/images/profiles/${caregiver.image}`}
                            alt={caregiver.name}
                        />
                        </Box>
                        <CardContent sx={{ p: 1 }}>
                            { caregiver.is_available ? <Chip sx={{ ml : 9 }} color="primary" size="small" label='Available'/> : <Chip sx={{ ml : 9 }} color="error" size="small" label='Occupied' /> }
        
                            <Typography gutterBottom variant="p" component="div">
                                {caregiver.name} 
                            </Typography>
                            <Typography variant="p">{caregiver.level} level</Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
                <Link href={route('caregiver', [caregiver.id, {'care': care, 'location': location}])}>
                    <CardActions>
                        <Button size="small" color="primary">
                            Show Detail
                        </Button>
                    </CardActions>
                </Link>
            </Card>
    );
}
