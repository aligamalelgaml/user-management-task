import React from 'react';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import UserTable from "./UserTable";
import AddModal from './AddModal';

const initalData = [{"id":1,"Name":"Ina","Username":"ibenka0","Email Address":"imarkson0@oaic.gov.au","Group":"Research and Development","Created On":"26/12/2022","Profile":"Active"},
{"id":2,"Name":"Riobard","Username":"rlettice1","Email Address":"rcavell1@topsy.com","Group":"Engineering","Created On":"16/7/2022","Profile":"Active"},
{"id":3,"Name":"Caryl","Username":"cdall2","Email Address":"cmarquez2@wordpress.com","Group":"Business Development","Created On":"25/12/2022","Profile":"Locked"},
{"id":4,"Name":"Sheena","Username":"ssturton3","Email Address":"shaydn3@wired.com","Group":"Research and Development","Created On":"20/1/2023","Profile":"Locked"},
{"id":5,"Name":"Sallee","Username":"skenson4","Email Address":"skohneke4@nyu.edu","Group":"Product Management","Created On":"6/10/2022","Profile":"Locked"},
{"id":6,"Name":"Diana","Username":"dchoake5","Email Address":"dbadland5@i2i.jp","Group":"Sales","Created On":"13/5/2023","Profile":"Inactive"},
{"id":7,"Name":"Kory","Username":"kgunnell6","Email Address":"kmurkin6@plala.or.jp","Group":"Engineering","Created On":"18/1/2023","Profile":"Inactive"},
{"id":8,"Name":"Frederico","Username":"fnelm7","Email Address":"fridler7@ow.ly","Group":"Business Development","Created On":"3/5/2023","Profile":"Inactive"}]

class UserManagement extends React.Component {
    state = {modalState: false, users: initalData};

    toggleModal = () => {
        this.setState({modalState: !this.state.modalState})
    }

    addUser = (user) => {
        const date = new Date().toLocaleDateString();
        
        user = {...user, id: Number(this.state.users.length + 1), "Created On": date}

        this.setState({users: this.state.users.concat(user)}, () => {
            console.log("adding ", user);
        })
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

                <AddModal status={this.state.modalState} toggle={this.toggleModal} addUser={this.addUser} user={{}}></AddModal>

                <Container>
                    <UserTable data={this.state.users}/>
                </Container>
            </>
        )
    }
}

export default UserManagement;