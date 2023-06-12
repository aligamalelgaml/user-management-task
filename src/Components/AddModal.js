import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, Button, FormControl, TextField, Select, MenuItem, InputLabel } from '@mui/material';



export default class AddModal extends React.Component {
    state = { name: this.props.user.name, username: this.props.user.username, email: this.props.user.email, userGroup: this.props.user.userGroup, profile: this.props.user.profile };

    formRef = React.createRef();

    handleSubmit(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Access the form field values using the event.target object
        const { name, username, email, userGroup, profile } = event.target.elements;


        console.log(name.value, username.value, email.value, userGroup.value, profile.value);

        // Reset the form fields
        event.target.reset();
    }

    hideLabel(id) {
        document.getElementById(id).style.display = 'none';
    }

    resetFields = () => {
        this.formRef.current.reset();
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


                        <Grid container spacing={2} sx={{ padding: "10px 25px 25px 25px" }}>
                            <Grid item xs={12}>
                                <form onSubmit={this.handleSubmit} ref={this.formRef}>

                                    <FormControl sx={{ mt: "14px" }} fullWidth>
                                        Full Name
                                        <TextField defaultValue={this.state?.name} placeholder={"Enter full name"} name='name' />
                                    </FormControl>

                                    <FormControl sx={{ mt: "14px" }} fullWidth >
                                        Username
                                        <TextField defaultValue={this.state?.username} placeholder={"Enter username"} name='username' />
                                    </FormControl>

                                    <FormControl sx={{ mt: "14px" }} fullWidth >
                                        Email Address
                                        <TextField defaultValue={this.state?.email} placeholder={"Enter user email address"} name='email' />
                                    </FormControl>

                                    <FormControl sx={{ mt: "14px" }} fullWidth>
                                        User Group
                                        <FormControl fullWidth>
                                            <InputLabel id="group-select-label">Choose user group</InputLabel>
                                            <Select defaultValue={''} name="userGroup" onFocus={() => this.hideLabel("group-select-label")}>
                                                <MenuItem value="option1">Option 1</MenuItem>
                                                <MenuItem value="option2">Option 2</MenuItem>
                                                <MenuItem value="option3">Option 3</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </FormControl>

                                    <FormControl sx={{ mt: "10px" }} fullWidth>
                                        User Profile
                                        <FormControl fullWidth>

                                            <InputLabel id="profile-select-label">Choose profile</InputLabel>
                                            <Select defaultValue={''} name="profile" onFocus={() => this.hideLabel("profile-select-label")}>
                                                <MenuItem value="option1">Option 1</MenuItem>
                                                <MenuItem value="option2">Option 2</MenuItem>
                                                <MenuItem value="option3">Option 3</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </FormControl>

                                    <Grid container sx={{mt: "25px"}}>
                                        <Grid item xs={12}>
                                            <Grid container justifyContent="space-between">
                                                <Grid item xs={4}>
                                                    <Button onClick={this.resetFields} variant="text" color="primary">
                                                        Reset Fields
                                                    </Button>
                                                </Grid>
                                                <Grid item xs={8} container justifyContent="flex-end">
                                                    <Button onClick={this.props.toggle} variant="outlined" color="primary">
                                                        Cancel
                                                    </Button>
                                                    <Button type='submit' sx={{ml: "20px"}} variant="contained" color="success">
                                                Add User
                                            </Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    {/* <Grid container>
                                        <Grid item xs={6} alignContent={'center'}>
                                            <Button variant="contained" color="primary">
                                                Start Button
                                            </Button>
                                        </Grid>

                                        <Grid item xs={6} container justifyContent="flex-end">
                                            <Button type='submit' sx={{ mt: "20px" }} className='greenBtn' variant="contained" color="primary">
                                                Add User
                                            </Button>
                                        </Grid>
                                    </Grid> */}

                                </form>
                            </Grid>
                        </Grid>


                    </Box>
                </Modal>
            </>
        );
    }
}