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
          rows={this.props.data}
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