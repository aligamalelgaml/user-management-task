import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, Button, FormControl, TextField, Select, MenuItem, InputLabel } from '@mui/material';



export default class AddModal extends React.Component {
    formRef = React.createRef();

    handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Access the form field values using the event.target object
        const { name, username, email, userGroup, profile } = event.target.elements;

        const newUser = { "Name": name.value, "Username": username.value, "Email Address": email.value, "Group": userGroup.value, "Profile": profile.value }

        // Closes form
        this.props.toggle();

        this.props.addUser(newUser);
    }

    /**
     * Hides modal label as it overlaps with the placeholder.
     * @param {*} id | Element ID to hide it's label.
     */
    hideLabel(id) {
        const label = document.getElementById(id);
        if (label) {
          label.style.display = 'none';
        } else {
          console.log(`Element with id '${id}' does not exist.`);
        }
    }

    /**
     * Resets all fields of a modal. 
     */
    resetFields = () => {
        const formElements = document.getElementById('modalForm').elements;

        for (let i = 0; i < formElements.length; i++) {
          const element = formElements[i];
          if (element.tagName === 'INPUT' && element.type !== 'submit') {
            element.value = '';
          }
        }

        document.getElementById("groupSelect").textContent = null;
        document.getElementById("profileSelect").textContent = null;
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
                                <form onSubmit={this.handleSubmit} id="modalForm" ref={this.formRef}>

                                    <FormControl sx={{ mt: "14px" }} fullWidth>
                                        Full Name
                                        <TextField required defaultValue={this.props.user?.["Name"]} placeholder="Enter full name" name="name" />
                                    </FormControl>

                                    <FormControl sx={{ mt: "14px" }} fullWidth >
                                        Username
                                        <TextField required defaultValue={this.props.user?.["Username"]} placeholder={"Enter username"} name='username' />
                                    </FormControl>

                                    <FormControl sx={{ mt: "14px" }} fullWidth >
                                        Email Address
                                        <TextField required defaultValue={this.props.user?.["Email Address"]} placeholder={"Enter user email address"} name='email' />
                                    </FormControl>

                                    <FormControl sx={{ mt: "14px" }} fullWidth>
                                        User Group
                                        <FormControl fullWidth>
                                        {!this.props.user?.["Group"] && <InputLabel id="group-select-label">Choose user group</InputLabel>}
                                            <Select required id="groupSelect" defaultValue={this.props.user?.["Group"] !== undefined ? this.props.user?.["Group"] : ""} name="userGroup" onFocus={() => this.hideLabel("group-select-label")}>
                                                <MenuItem value="Office">Office</MenuItem>
                                                <MenuItem value="Managers">Managers</MenuItem>
                                                <MenuItem value="Head Office">Head Office</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </FormControl>

                                    <FormControl sx={{ mt: "10px" }} fullWidth>
                                        User Profile
                                        <FormControl fullWidth>
                                            {!this.props.user?.["Profile"] && <InputLabel id="profile-select-label">Choose profile</InputLabel>}
                                            <Select required
                                                id="profileSelect"
                                                defaultValue={this.props.user?.["Profile"] !== undefined ? this.props.user?.["Profile"] : ""}
                                                name="profile"
                                                onFocus={() => this.hideLabel("profile-select-label")}
                                            >
                                                <MenuItem value="Active">Active</MenuItem>
                                                <MenuItem value="Inactive">Inactive</MenuItem>
                                                <MenuItem value="Locked">Locked</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </FormControl>


                                    <hr style={{ margin: '30px 0' }} />

                                    <Grid container sx={{ mt: "25px" }}>

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
                                                    <Button type='submit' sx={{ ml: "20px" }} variant="contained" color="success">
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