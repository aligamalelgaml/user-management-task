import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, Button, FormControl, TextField, Select, MenuItem, InputLabel } from '@mui/material';



export default class AddModal extends React.Component {
    state = {
        userGroup: this.props.user["Group"] ?  this.props.user["Group"] : '',
        userProfile: this.props.user["Profile"] ? this.props.user["Profile"] : ''
    };

    formRef = React.createRef();

    handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Access the form field values using the event.target object except user group and profile (select elements are best controlled)
        const { name, username, email } = event.target.elements;

        const newUser = {"Name": name.value, "Username": username.value, "Email Address": email.value, "Group": this.state.userGroup, "Profile": this.state.userProfile}

        // Reset the form fields
        this.handleCancel();

        this.props.addUser(newUser);
    }

    resetFields = () => {
        const formElements = this.formRef.current.elements;

        for (let i = 0; i < formElements.length; i++) {
            const element = formElements[i];
            if (element.tagName.toLowerCase() === 'input') {
              element.value = '';
            }
        }

        this.setState({
            userGroup: '',
            userProfile: ''
        });
    }

    handleUserGroupChange = (event) => {
        this.setState({ userGroup: event.target.value });
    };
    
    handleProfileChange = (event) => {
        this.setState({ userProfile: event.target.value });
    };

    handleCancel = () => {
        this.resetFields();
        this.props.toggle();
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
                                        <TextField defaultValue={this.props.user?.["Name"]} placeholder="Enter full name" name="name" />
                                    </FormControl>

                                    <FormControl sx={{ mt: "14px" }} fullWidth >
                                        Username
                                        <TextField defaultValue={this.props.user?.["Username"]} placeholder={"Enter username"} name='username' />
                                    </FormControl>

                                    <FormControl sx={{ mt: "14px" }} fullWidth >
                                        Email Address
                                        <TextField defaultValue={this.props.user?.["Email Address"]} placeholder={"Enter user email address"} name='email' />
                                    </FormControl>

                                    <FormControl sx={{ mt: "14px" }} fullWidth>
                                        User Group
                                        <FormControl fullWidth>
                                            {this.state.userGroup === ''
                                            ? <InputLabel id="group-select-label">Choose user group</InputLabel>
                                            : null}
            
                                            <Select id="groupSelect" value={this.state.userGroup} onChange={this.handleUserGroupChange} name="userGroup">
                                                <MenuItem value="Office">Office</MenuItem>
                                                <MenuItem value="Managers">Managers</MenuItem>
                                                <MenuItem value="Head Office">Head Office</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </FormControl>

                                    <FormControl sx={{ mt: "10px" }} fullWidth>
                                        User Profile
                                        <FormControl fullWidth>
                                        {this.state.userProfile === ''
                                            ? <InputLabel id="profile-select-label">Choose profile</InputLabel>
                                            : null}              
                                            <Select id="profileSelect" value={this.state.userProfile} onChange={this.handleProfileChange} name="profile">
                                                <MenuItem value="Active">Active</MenuItem>
                                                <MenuItem value="Inactive">Inactive</MenuItem>
                                                <MenuItem value="Locked">Locked</MenuItem>
                                            </Select>
                                        </FormControl>

                                    </FormControl>
                                    
                                
                                    <hr style={{ margin: '30px 0' }} />

                                    <Grid container sx={{mt: "25px"}}>

                                        <Grid item xs={12}>
                                            <Grid container justifyContent="space-between">
                                                <Grid item xs={4}>
                                                    <Button onClick={this.resetFields} variant="text" color="primary">
                                                        Reset Fields
                                                    </Button>
                                                </Grid>
                                                <Grid item xs={8} container justifyContent="flex-end">
                                                    <Button onClick={this.handleCancel} variant="outlined" color="primary">
                                                        Cancel
                                                    </Button>
                                                    <Button type='submit' sx={{ml: "20px"}} variant="contained" color="success">
                                                Add User
                                            </Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                </form>
                            </Grid>
                        </Grid>


                    </Box>
                </Modal>
            </>
        );
    }
}