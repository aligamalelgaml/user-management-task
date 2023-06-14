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
    state = { modalState: false, users: data, toEditUser: {}, searchResults: data, userSearchResults: data, statusSearchResults: data, dateSearchResults: data, allResults: [] };

    /**
     * Toggles the add/edit modal on & off.
     */
    toggleModal = () => {
        console.log("toggling");
        this.setState({ toEditUser: {}, modalState: !this.state.modalState })
    }

    /**
     * This function is responsible for adding/editing users. It considers different usernames as different users and updates or adds accordingly.
     * @param {Object} newUser | A new user object containing all data retreived from the modal
     */
    addUser = (newUser) => {
        if (this.state.users.some((user) => user["Username"] === newUser["Username"])) {
            console.log("Updating..")

            const updatedUsers = this.state.users.map(user => (user["Username"] === newUser["Username"] ? { ...user, ...newUser } : user));

            this.setState({ users: updatedUsers });
        } else {
            const date = new Date().toLocaleDateString();
            const addedUser = { ...newUser, id: Number(this.state.users.length + 1), "Created On": date } // Adding UID & current date to new user object.

            this.setState({ users: this.state.users.concat(addedUser) }, () => {
                console.log("Added: ", addedUser);
            })
        }
    }

    /**
     * This function is triggered on a data table row's onClick event, and so it updates the editedUser state to be sent to the modal.
     * @param {Object} editedUser | User object about to be sent to the modal for editing
     */
    editUser = (editedUser) => {
        console.log("Editing ", editedUser)
        this.setState({ toEditUser: editedUser, modalState: !this.state.modalState })
    }

    /**
     * This function is responsible for generic search filtering, it compares the received text against all key values for all users.
     * @param {string} searchText | Received string to be matched against all user values.
     */
    search = (searchText) => {
        let matchingSearch;

        if(searchText === "") {
            matchingSearch = this.state.users;
        } else {
            matchingSearch = this.__genericContainsSearch(this.state.users, searchText);
        }

        this.setState({searchResults: matchingSearch}, () => this.handleAllResults())
    }

    /**
     * This is a helper function that allows for a generic search of all received array values using the provided string.
     * @param {Array} searchedArray | Array to be searched
     * @param {string} searchText | String query to attempt to match
     * @returns 
     */
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


    /**
     * This function filters for the user with the specified provided username (IMPORTANT: STRING MUST BE A 100% MATCH)
     * @param {string} userSearchText | username query to attempt to match.
     */
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

    /**
     * This function filters using the provided arguement for the specified profile status.
     * @param {string} status | User status to attempt to match for (i.e. Locked/Inactive/ACtive)
     */
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

    /**
     * This does nothing at the moment as it would be nonsensical to search for only a certain date and MUI's date picker does not allow setting a null value on it, so we cannot revert to 'All Time' filtering.
     * @param {*} date 
     */
    dateSearch = (date) => {
        let matchingSearch;
    }


    /**
     * This function is called after every update to a search result, the final search is equal to the "intersecting" values of all resultant search arrays. 
     * Finally, it updates the state of allResults which is then passed as a prop to UserTable so that it is displayed.
     */
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
                    <UserTable data={this.state.users} editUser={this.editUser} search={this.search} userSearch={this.userSearch} selectSearch={this.statusSearch} dateSearch={this.dateSearch} searchResults={this.state.allResults} />
                </Container>
            </>
        )
    }
}

export default UserManagement;