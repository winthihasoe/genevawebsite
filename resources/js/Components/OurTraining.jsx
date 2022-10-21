import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Divider, Grid } from '@mui/material';
import { Link } from '@inertiajs/inertia-react';

export default function MediaControlCard() {
  const theme = useTheme();

  return (
    <Box sx={{padding: 5}} id="training">
        <Typography variant='overline' align="center" color='text.secondary' component='p' gutterBottom>our local training</Typography>
        <Typography
        component="h1"
        variant="h4"
        align="center"
        color="text.primary"
        gutterBottom
        >
                Training Class Everyone can join
        </Typography>
        <Link href={route('showElderCareTraining')}>
        <Grid container>
            <Grid item md={6} xs={12}>
                <Box sx={{ p : 2 }}>
                    <Typography variant='h6' gutterBottom>
                        Elder Care Training
                    </Typography>
                    <Typography variant='subtitle1' gutterBottom>
                        --Training class--
                    </Typography>
                    <Typography paragraph>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur beatae, adipisci eveniet quia dolorem impedit distinctio asperiores libero quasi ipsam veniam? Deleniti, consectetur cum explicabo praesentium, nobis, corporis facilis repudiandae libero repellendus dicta sint? Est exercitationem, vitae dolore dolor ipsum voluptatem sint sapiente ducimus dolores provident tenetur modi, non unde.
                    </Typography>
                </Box>
            </Grid>
            <Grid item md={6} xs={12}>
                <Box sx={{ p : 2 }}>
                    <img src='/images/eldercare.jpg' alt='elder care training' />
                </Box>
            </Grid>

        </Grid>
        </Link>

        <Divider />
        <Link href={route('showChildCareTraining')}>
            <Grid container>
                <Grid item md={6} xs={12}>
                    <Box sx={{ p : 2 }}>
                        <Typography variant='h6' gutterBottom>
                            Child Care Training
                        </Typography>
                        <Typography variant='subtitle1' gutterBottom>
                            --Training class--
                        </Typography>
                        <Typography paragraph>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur beatae, adipisci eveniet quia dolorem impedit distinctio asperiores libero quasi ipsam veniam? Deleniti, consectetur cum explicabo praesentium, nobis, corporis facilis repudiandae libero repellendus dicta sint? Est exercitationem, vitae dolore dolor ipsum voluptatem sint sapiente ducimus dolores provident tenetur modi, non unde.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Box sx={{ p : 2 }}>
                        <img src='/images/childcare.jpg' alt='elder care training' />
                    </Box>
                </Grid>
            </Grid>       
        </Link>
         
    </Box>
  );
}
