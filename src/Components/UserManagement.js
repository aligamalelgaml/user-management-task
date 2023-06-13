import React from 'react';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import UserTable from "./UserTable";
import AddModal from './AddModal';

class UserManagement extends React.Component {
    state = {modalState: false, users: [], toEditUser: {}};

    toggleModal = () => {
        console.log("toggling");
        this.setState({toEditUser: {}, modalState: !this.state.modalState})
    }

    resetModal = () => {
        console.log("resetting");
        this.setState({toEditUser: {}});
    }

    addUser = (newUser) => {
        if(this.state.users.some((user) => user["Username"] === newUser["Username"])) {
            console.log("Updating..")

            const updatedUsers = this.state.users.map(user => (user["Username"] === newUser["Username"] ? {...user, ...newUser} : user)); 

            this.setState({users: updatedUsers});
        } else {
            const date = new Date().toLocaleDateString();
            const addedUser = {...newUser, id: Number(this.state.users.length + 1), "Created On": date}
    
            this.setState({users: this.state.users.concat(addedUser)}, () => {
                console.log("Added: ", addedUser);
            })
        }
    }

    editUser = (editedUser) => {
        console.log("Editing ", editedUser)
        this.setState({toEditUser: editedUser, modalState: !this.state.modalState})
    }

    render() {
        return (
            <>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Typography variant="h6" fontWeight={650} gutterBottom>
                                User Management
                            </Typography>
                        </Grid>

                        <Grid item xs={4} container justifyContent="flex-end">
                            <Button onClick={this.toggleModal} variant="contained" className='greenBtn'>+ Add New</Button>
                        </Grid>
                    </Grid>
                </Container>

                <AddModal status={this.state.modalState} toggle={this.toggleModal} reset={this.resetModal} addUser={this.addUser} user={this.state.toEditUser}></AddModal>

                <Container>
                    <UserTable data={this.state.users} editUser={this.editUser}/>
                </Container>
            </>
        )
    }
}

export default UserManagement;