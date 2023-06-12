import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, Button, FormControl, TextField, Select, MenuItem, InputLabel } from '@mui/material';



export default class AddModal extends React.Component {
    state = this.props.currentUser || { name: '', username: '', email: '', userGroup: '', profile: '' };


    handleSubmit(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Access the form field values using the event.target object
        const { name, username, email, userGroup, profile } = event.target.elements;


        console.log(name.value, username.value, email.value, userGroup.value, profile.value);

        // Reset the form fields
        event.target.reset();
    }


    render() {
        return (
            <>
                <Modal
                    open={this.props.status}
                    onClose={this.props.toggle}
                    aria-labelledby="addModalTitle"
                >
                    <Box className="modal">
                        <Typography id="addModalTitle" variant="h6">
                            Add a new user
                        </Typography>


                        <Grid container spacing={2} sx={{ padding: "25px 25px 25px 25px" }}>
                            <Grid item xs={12}>
                                <form onSubmit={this.handleSubmit}>

                                    <FormControl fullWidth >
                                        <TextField sx={{mt:"10px"}} name='name' label="Name" />
                                        <TextField sx={{mt:"10px"}} name='username' label="Username" />
                                        <TextField sx={{mt:"10px"}} name='email' label="Email Address" />
                                    </FormControl>

                                    <FormControl sx={{mt:"10px"}} fullWidth>
                                        <InputLabel id="group-select-label">Select a user group</InputLabel>
                                        <Select defaultValue={''} name="userGroup" labelId="group-select-label" label="Select a group">
                                            <MenuItem value="option1">Option 1</MenuItem>
                                            <MenuItem value="option2">Option 2</MenuItem>
                                            <MenuItem value="option3">Option 3</MenuItem>
                                        </Select>
                                    </FormControl>

                                    <FormControl sx={{mt:"10px"}} fullWidth>
                                        <InputLabel id="profile-select-label">Select a profile</InputLabel>
                                        <Select defaultValue={''} name="profile" labelId="profile-select-label" label="Select a profile">
                                            <MenuItem value="option1">Option 1</MenuItem>
                                            <MenuItem value="option2">Option 2</MenuItem>
                                            <MenuItem value="option3">Option 3</MenuItem>
                                        </Select>
                                    </FormControl>


                                    <Button type='submit' sx={{ mt: "20px" }} className='greenBtn' variant="contained" color="primary">
                                        Add User
                                    </Button>
                                </form>

                            </Grid>
                        </Grid>


                    </Box>
                </Modal>
            </>
        );
    }
}