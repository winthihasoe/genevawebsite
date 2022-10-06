import Authenticated from '@/Layouts/Authenticated'
import { Head, useForm } from '@inertiajs/inertia-react'
import { Box, Button, Chip, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import LoupeIcon from '@mui/icons-material/Loupe';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DoNotDisturbSharpIcon from '@mui/icons-material/DoNotDisturbSharp';


export default function ChildCareTopics(props) {
    const elderSkillTopics = props.childSkillTopics;
    const [toggleAddNewSkill, setToggleAddNewSkill] = React.useState(false);
    const { data, setData, errors, post, delete:destroy } = useForm({
        newSkill: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({[name]: value });
    }

    const handleNewSkill = (e) => {
        e.preventDefault();
        post(route('addNewChildSkill'), data.newSkill);
        setData({newSkill: ""});
    }

    function handleDelete(id) {
        destroy(route('destroyChildSkill', id));
    }
    
  return (
    <Authenticated auth={props.auth} errors={props.errors}>
        <Head title='Child Skills' />
        <Container maxWidth='md'>
            <Typography variant='h4'>Showing Child Care Topics</Typography>
            <Typography variant='overline'>You can add new skill or delete skills.</Typography>
            <Box sx={{ marginTop: 3}}>
                <Box sx={{ marginBottom: 3}}>

                    <Button onClick={()=>setToggleAddNewSkill(!toggleAddNewSkill)}>
                        {toggleAddNewSkill? <DoNotDisturbSharpIcon /> : <LoupeIcon /> } {" "} 
                        {toggleAddNewSkill ? "Cancel" : "Add New Skill"}
                    </Button> 
                                        
                        {toggleAddNewSkill && 
                            <Box>
                                {errors && <Box>{props.errors.newSkill}</Box>}
                                <TextField
                                        label="Add new skill"
                                        name="newSkill"
                                        placeholder=""
                                        value={data.newSkill}
                                        type="text"
                                        onChange={handleChange}
                                />
                                <Button onClick={handleNewSkill} style={styles.button}>
                                    <AddBoxIcon />{" "} Add
                                </Button>
                            </Box>
                        }
                </Box>
                {elderSkillTopics.map(topic => (
                    <Box sx={{ padding: 1, display: 'inline-block'}} key={topic.id}>
                    
                        <Chip label={topic.topic} onDelete={()=>handleDelete(topic.id)} deleteIcon={<DeleteIcon />}
                        variant="outlined"/>
                        
                        
                    </Box>
                ))}
            </Box>
            
            
            
           
        </Container>
    </Authenticated>
  )
}
const styles = {
    button: {
        margin: 13,
    },
};

