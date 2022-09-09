import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MediaControlCard() {
  const theme = useTheme();

  return (
    <Box sx={{padding: 5}} id="training">
        <Typography variant='overline' align="center" color='text.secondary' component='p' gutterBottom>our local training</Typography>
        <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
        >
                Training Class Everyone can join
        </Typography>
        <Card sx={{ display: 'flex', marginBottom: 4 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        Elder Care Training
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        --Training class--
                    </Typography>
                    <Typography paragraph>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur beatae, adipisci eveniet quia dolorem impedit distinctio asperiores libero quasi ipsam veniam? Deleniti, consectetur cum explicabo praesentium, nobis, corporis facilis repudiandae libero repellendus dicta sint? Est exercitationem, vitae dolore dolor ipsum voluptatem sint sapiente ducimus dolores provident tenetur modi, non unde.
                    </Typography> 
                </CardContent>
            </Box>
            <CardMedia
                component="img"
                sx={{ maxWidth: 400 }}
                image="/images/eldercare.jpg"
                alt="elder care training"
            />
        </Card>

        <Card sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
                Child Care Training
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
                --Training class--
            </Typography>
            <Typography paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur beatae, adipisci eveniet quia dolorem impedit distinctio asperiores libero quasi ipsam veniam? Deleniti, consectetur cum explicabo praesentium, nobis, corporis facilis repudiandae libero repellendus dicta sint? Est exercitationem, vitae dolore dolor ipsum voluptatem sint sapiente ducimus dolores provident tenetur modi, non unde.
            </Typography> 
            </CardContent>
            
        </Box>
        <CardMedia
            component="img"
            sx={{ maxWidth: 400 }}
            image="/images/childcare.jpg"
            alt="elder care training"
        />
        </Card>        
    </Box>
  );
}
