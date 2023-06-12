import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Grid } from '@mui/material';


const columns = [
  { field: 'id', headerName: 'ID', flex: 0,  align: 'center',  headerAlign: 'center', disableColumnMenu: true },
  { field: 'Name', headerName: 'Full name', flex: 1,  align: 'center',  headerAlign: 'center', disableColumnMenu: true},
  { field: 'Username', headerName: 'Username', flex: 1,  align: 'center',  headerAlign: 'center', disableColumnMenu: true},
  { field: 'Email Address', headerName: 'Email Address', flex: 1,  align: 'center',  headerAlign: 'center', disableColumnMenu: true},
  { field: 'Group', headerName: 'Group', flex: 1,  align: 'center',  headerAlign: 'center', disableColumnMenu: true},
  { field: 'Profile', headerName: 'Profile', flex: 1,  align: 'center',  headerAlign: 'center', disableColumnMenu: true},
  { field: 'Created On', headerName: 'Created On', flex: 1,  align: 'center', headerAlign: 'center', disableColumnMenu: true},
];

export default class BasicTable extends React.Component {
  
  handleRowClick = (params) => {
    const data = JSON.parse(JSON.stringify(params))
    this.props.editUser(data.row);
  };

  render() {
    return (
      <Grid container bgcolor={'white'} borderRadius={"15px"} mt={"15px"}>
        <Grid item xs={12}>

        <DataGrid
          rows={this.props.data}
          columns={columns}
          checkboxSelection
          onRowClick={this.handleRowClick}
        />

        </Grid>
      </Grid>
    );
  }
}