import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Box } from "@mui/system";
import { Link, usePage } from "@inertiajs/inertia-react";

export default function CaregiverCard(props) {
    const caregiver = props.caregiver;
    const care = usePage().props.care;
    return (
        
            <Card sx={{ width: 160 }} style={{ height: '100%' }}>
                <Link href={route('caregiver', [caregiver.id, {'care': care}])}>
                    <CardActionArea>
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
                </Link>

                <CardActions>
                    <Button size="small" color="primary">
                        Show more
                    </Button>
                </CardActions>   
            </Card>
    );
}
