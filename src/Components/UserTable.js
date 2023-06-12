import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Grid } from '@mui/material';


const columns = [
  { field: 'id', headerName: 'ID', flex: 0,  align: 'center',  headerAlign: 'center', disableColumnMenu: true },
  { field: 'Name', headerName: 'First name', flex: 1,  align: 'center',  headerAlign: 'center', disableColumnMenu: true},
  { field: 'Username', headerName: 'Username', flex: 1,  align: 'center',  headerAlign: 'center', disableColumnMenu: true},
  { field: 'Email Address', headerName: 'Email Address', flex: 1,  align: 'center',  headerAlign: 'center', disableColumnMenu: true},
  { field: 'Group', headerName: 'Group', flex: 1,  align: 'center',  headerAlign: 'center', disableColumnMenu: true},
  { field: 'Created On', headerName: 'Created On', flex: 1,  align: 'center', headerAlign: 'center', disableColumnMenu: true},
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];

const rows = [{"id":1,"Name":"Sonnie Link","Username":"slink0","Email Address":"slink0@tuttocitta.it","Group":"Training","Created On":"09.10.2022"},
{"id":2,"Name":"Jerri Catley","Username":"jcatley1","Email Address":"jcatley1@sohu.com","Group":"Product Management","Created On":"14.08.2022"},
{"id":3,"Name":"Heloise Killbey","Username":"hkillbey2","Email Address":"hkillbey2@tamu.edu","Group":"Training","Created On":"04.06.2023"},
{"id":4,"Name":"Rhody Wartonby","Username":"rwartonby3","Email Address":"rwartonby3@myspace.com","Group":"Product Management","Created On":"22.09.2022"},
{"id":5,"Name":"Wynne Trudgion","Username":"wtrudgion4","Email Address":"wtrudgion4@yolasite.com","Group":"Accounting","Created On":"27.10.2022"},
{"id":6,"Name":"Myranda Mendel","Username":"mmendel5","Email Address":"mmendel5@myspace.com","Group":"Research and Development","Created On":"20.06.2022"},
{"id":7,"Name":"Yves Appleton","Username":"yappleton6","Email Address":"yappleton6@qq.com","Group":"Research and Development","Created On":"23.03.2023"},
{"id":8,"Name":"Skip Negal","Username":"snegal7","Email Address":"snegal7@cocolog-nifty.com","Group":"Sales","Created On":"11.10.2022"},
{"id":9,"Name":"Cristie Kurth","Username":"ckurth8","Email Address":"ckurth8@telegraph.co.uk","Group":"Engineering","Created On":"18.06.2022"},
{"id":10,"Name":"Mia Shore","Username":"mshore9","Email Address":"mshore9@so-net.ne.jp","Group":"Product Management","Created On":"31.08.2022"},
{"id":11,"Name":"Eziechiele Duckerin","Username":"educkerina","Email Address":"educkerina@google.cn","Group":"Accounting","Created On":"07.09.2022"},
{"id":12,"Name":"Roldan Burland","Username":"rburlandb","Email Address":"rburlandb@t.co","Group":"Training","Created On":"04.05.2023"},
{"id":13,"Name":"Salaidh Daskiewicz","Username":"sdaskiewiczc","Email Address":"sdaskiewiczc@ovh.net","Group":"Product Management","Created On":"17.08.2022"},
{"id":14,"Name":"Briney McQuade","Username":"bmcquaded","Email Address":"bmcquaded@a8.net","Group":"Engineering","Created On":"12.05.2023"},
{"id":15,"Name":"Cass Bleue","Username":"cbleuee","Email Address":"cbleuee@patch.com","Group":"Legal","Created On":"02.05.2023"},
{"id":16,"Name":"Moll Stallibrass","Username":"mstallibrassf","Email Address":"mstallibrassf@cocolog-nifty.com","Group":"Support","Created On":"20.09.2022"},
{"id":17,"Name":"Northrop Frankland","Username":"nfranklandg","Email Address":"nfranklandg@umich.edu","Group":"Services","Created On":"27.09.2022"},
{"id":18,"Name":"Munroe Eger","Username":"megerh","Email Address":"megerh@squarespace.com","Group":"Accounting","Created On":"26.01.2023"},
{"id":19,"Name":"Anita Sowthcote","Username":"asowthcotei","Email Address":"asowthcotei@washington.edu","Group":"Accounting","Created On":"22.05.2023"},
{"id":20,"Name":"Coralyn Vernay","Username":"cvernayj","Email Address":"cvernayj@networksolutions.com","Group":"Accounting","Created On":"29.11.2022"}];


export default class BasicTable extends React.Component {
  handleCellClick = (params) => {
    console.log('Cell clicked:', params);
  };
  
  handleRowClick = (params) => {
    console.log('Row clicked:', params);
  };

  render() {
    return (
      <Grid container bgcolor={'white'} borderRadius={"15px"} mt={"15px"}>
        <Grid item xs={12}>

        <DataGrid
          rows={rows}
          columns={columns}
          checkboxSelection
          // onCellClick={this.handleCellClick}
          onRowClick={this.handleRowClick}
        />

        </Grid>
      </Grid>
    );
  }
}