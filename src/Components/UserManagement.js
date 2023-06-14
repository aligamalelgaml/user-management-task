import React from 'react';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import UserTable from "./UserTable";
import AddModal from './AddModal';

const data = [{ "id": 1, "Name": "Ina", "Username": "ibenka0", "Email Address": "imarkson0@oaic.gov.au", "Group": "Managers", "Created On": "26/12/2022", "Profile": "Active" },
{ "id": 2, "Name": "Riobard", "Username": "rlettice1", "Email Address": "rcavell1@topsy.com", "Group": "Managers", "Created On": "16/7/2022", "Profile": "Active" },
{ "id": 3, "Name": "Caryl", "Username": "cdall2", "Email Address": "cmarquez2@wordpress.com", "Group": "Managers", "Created On": "25/12/2022", "Profile": "Inactive" },
{ "id": 4, "Name": "Sheena", "Username": "ssturton3", "Email Address": "shaydn3@wired.com", "Group": "Managers", "Created On": "20/1/2023", "Profile": "Active" },
{ "id": 5, "Name": "Sallee", "Username": "skenson4", "Email Address": "skohneke4@nyu.edu", "Group": "Office", "Created On": "6/10/2022", "Profile": "Active" },
{ "id": 6, "Name": "Diana", "Username": "dchoake5", "Email Address": "dbadland5@i2i.jp", "Group": "Office", "Created On": "13/5/2023", "Profile": "Locked" },
{ "id": 7, "Name": "Kory", "Username": "kgunnell6", "Email Address": "kmurkin6@plala.or.jp", "Group": "Office", "Created On": "18/1/2023", "Profile": "Active" },
{ "id": 8, "Name": "Frederico", "Username": "fnelm7", "Email Address": "fridler7@ow.ly", "Group": "Office", "Created On": "3/5/2023", "Profile": "Locked" }]

class UserManagement extends React.Component {
    state = { modalState: false, users: data, toEditUser: {}, searchResults: data, userSearchResults: data, statusSearchResults: data ,allResults: [] };

    toggleModal = () => {
        console.log("toggling");
        this.setState({ toEditUser: {}, modalState: !this.state.modalState })
    }

    addUser = (newUser) => {
        if (this.state.users.some((user) => user["Username"] === newUser["Username"])) {
            console.log("Updating..")

            const updatedUsers = this.state.users.map(user => (user["Username"] === newUser["Username"] ? { ...user, ...newUser } : user));

            this.setState({ users: updatedUsers });
        } else {
            const date = new Date().toLocaleDateString();
            const addedUser = { ...newUser, id: Number(this.state.users.length + 1), "Created On": date }

            this.setState({ users: this.state.users.concat(addedUser) }, () => {
                console.log("Added: ", addedUser);
            })
        }
    }

    editUser = (editedUser) => {
        console.log("Editing ", editedUser)
        this.setState({ toEditUser: editedUser, modalState: !this.state.modalState })
    }

    search = (searchText) => {
        let matchingSearch;

        if(searchText === "") {
            matchingSearch = this.state.users;
        } else {
            matchingSearch = this.__genericContainsSearch(this.state.users, searchText);
        }

        this.setState({searchResults: matchingSearch}, () => this.handleAllResults())
    }

    __genericContainsSearch = (searchedArray, searchText) => {
        return searchedArray.filter((user) => {
            return Object.values(user).some((attribute) => {
                if (typeof attribute === "string") {
                    return attribute.toLowerCase().includes(searchText.toLowerCase());
                }
                return false;
            })
        })
    }
    
    userSearch = (userSearchText) => {
        let matchingSearch;
        console.log("userSearchText:", userSearchText);

        if(userSearchText !== "") {
            matchingSearch = this.state.users.filter((user) => user["Username"] === userSearchText);
        } else {
            matchingSearch = this.state.users;
        }

        this.setState({userSearchResults: matchingSearch}, () => this.handleAllResults());
    }

    statusSearch = (status) => {
        let matchingSearch;
        console.log("status:", status);


        if(status !== "any") {
            matchingSearch = this.state.users.filter((user) => user["Profile"].toLocaleLowerCase() === status);
        } else {
            matchingSearch = this.state.users;
        }

        this.setState({statusSearchResults: matchingSearch}, () => this.handleAllResults())
    }

    handleAllResults = () => {
        const { searchResults, userSearchResults, statusSearchResults} = this.state;

        const results = searchResults.filter((searchResult) => {
            return userSearchResults.some(userSearchResult => searchResult.id === userSearchResult.id) && statusSearchResults.some(statusSearchResult => searchResult.id === statusSearchResult.id);
        })
            
        this.setState({ allResults: results });
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

                <AddModal status={this.state.modalState} toggle={this.toggleModal} addUser={this.addUser} user={this.state.toEditUser}></AddModal>

                <Container>
                    <UserTable data={this.state.users} editUser={this.editUser} search={this.search} userSearch={this.userSearch} selectSearch={this.statusSearch} searchResults={this.state.allResults} />
                </Container>
            </>
        )
    }
}

export default UserManagement;