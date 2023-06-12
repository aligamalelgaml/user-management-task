import React from 'react';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import UserTable from "./UserTable";
import AddModal from './AddModal';

const data = [{"id":1,"Name":"Sonnie Link","Username":"slink0","Email Address":"slink0@tuttocitta.it","Group":"Training","Created On":"09.10.2022"},
{"id":2,"Name":"Jerri Catley","Username":"jcatley1","Email Address":"jcatley1@sohu.com","Group":"Product Management","Created On":"14.08.2022"},
{"id":3,"Name":"Heloise Killbey","Username":"hkillbey2","Email Address":"hkillbey2@tamu.edu","Group":"Training","Created On":"04.06.2023"},
{"id":4,"Name":"Rhody Wartonby","Username":"rwartonby3","Email Address":"rwartonby3@myspace.com","Group":"Product Management","Created On":"22.09.2022"},
{"id":5,"Name":"Wynne Trudgion","Username":"wtrudgion4","Email Address":"wtrudgion4@yolasite.com","Group":"Accounting","Created On":"27.10.2022"},
{"id":6,"Name":"Myranda Mendel","Username":"mmendel5","Email Address":"mmendel5@myspace.com","Group":"Research and Development","Created On":"20.06.2022"},
{"id":7,"Name":"Yves Appleton","Username":"yappleton6","Email Address":"yappleton6@qq.com","Group":"Research and Development","Created On":"23.03.2023"},
{"id":8,"Name":"Skip Negal","Username":"snegal7","Email Address":"snegal7@cocolog-nifty.com","Group":"Sales","Created On":"11.10.2022"},
{"id":9,"Name":"Cristie Kurth","Username":"ckurth8","Email Address":"ckurth8@telegraph.co.uk","Group":"Engineering","Created On":"18.06.2022"},
{"id":10,"Name":"Mia Shore","Username":"mshore9","Email Address":"mshore9@so-net.ne.jp","Group":"Product Management","Created On":"31.08.2022"},
];

class UserManagement extends React.Component {
    state = {modalState: false, data: data};

    toggleModal = () => {
        this.setState({modalState: !this.state.modalState})
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

                <AddModal status={this.state.modalState} toggle={this.toggleModal} user={{}}></AddModal>

                <Container>
                    <UserTable data={this.state.data}/>
                </Container>
            </>
        )
    }
}

export default UserManagement;