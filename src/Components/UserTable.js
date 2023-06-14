import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, Grid, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import EditIcon from '@mui/icons-material/Edit';
import DoDisturbAltIcon from '@mui/icons-material/DoDisturbAlt';
import LockIcon from '@mui/icons-material/Lock';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DownloadIcon from '@mui/icons-material/Download';



const columns = [
  {
    field: "Name",
    headerName: "Full name",
    flex: 1,
    align: "center",
    headerAlign: "center",
    disableColumnMenu: true,
  },
  {
    field: "Username",
    headerName: "Username",
    flex: 1,
    align: "center",
    headerAlign: "center",
    disableColumnMenu: true,
  },
  {
    field: "Email Address",
    headerName: "Email Address",
    flex: 1,
    align: "center",
    headerAlign: "center",
    disableColumnMenu: true,
  },
  {
    field: "Group",
    headerName: "Group",
    flex: 1,
    align: "center",
    headerAlign: "center",
    disableColumnMenu: true,
  },
  {
    field: "Profile",
    headerName: "Status",
    flex: 1,
    align: "center",
    headerAlign: "center",
    disableColumnMenu: true,
  },
  {
    field: "Created On",
    headerName: "Created On",
    flex: 1,
    align: "center",
    headerAlign: "center",
    disableColumnMenu: true,
  },
];

export default class BasicTable extends React.Component {

  state = {search : "", userSearch : "", status: "any", date: ""};

  handleSearch = (e) => {
    this.setState({search: e.target.value}, () => this.props.search(this.state.search))
  }

  handleUserSearch = (e) => {
    this.setState({userSearch: e.target.value}, () => this.props.userSearch(this.state.userSearch))
  }

  handleSelect = (e) => {
    this.setState({status: e.target.value}, () => this.props.selectSearch(this.state.status))
  }

  handleDate = (date) => {
    this.setState({date: date}, () => this.props.dateSearch(this.state.date))
  }

  handleRowClick = (gridTableData) => {
    const data = JSON.parse(JSON.stringify(gridTableData)); // Deep copy of data is needed.
    this.props.editUser(data.row);
  };


  render() {
    let rowData;

    if(this.state.search === "" && this.state.userSearch === "" && this.state.status === "any") {
      rowData = this.props.data.length > 0 ? this.props.data : [];
    } else {
      rowData = this.props.searchResults ? this.props.searchResults : [];
    }

    return (
      <Grid
        container
        bgcolor="white"
        borderRadius="15px"
        style={{ border: "1px solid black", position: "relative" }}
        mt="15px"
      >
        <Grid item xs={12}>

          <Box sx={{ padding: "20px" }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <TextField
                  size="small"
                  placeholder="Search..."
                  id="searchInput"
                  value={this.state.search}
                  onChange={this.handleSearch}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item>
                <TextField
                  size="small"
                  placeholder="User Name"
                  value={this.state.userSearch}
                  onChange={this.handleUserSearch}
                  sx={{ width: "140px" }}
                />
              </Grid>

              <Grid item>
                <FormControl sx={{ minWidth: 100 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    User Status
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={this.state.status}
                    onChange={this.handleSelect}
                    label="User Status"
                    size="small"
                  >
                    <MenuItem value={"any"}>Any</MenuItem>
                    <MenuItem value={"active"}>Active</MenuItem>
                    <MenuItem value={"inactive"}>Inactive</MenuItem>
                    <MenuItem value={"locked"}>Locked</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker label="Creation Date" Value={this.state.date} onChange={this.handleDate}
                    slotProps={{ textField: { size: 'small'} }}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>

            <Grid container mt={"15px"} spacing={2} alignItems="center" justifyContent="space-between">
              <Grid item display={"flex"} justifyContent={"center"} alignItems={"center"}>

                <Box sx={{ backgroundColor: "#e7e9ef", borderRadius: "20%", paddingX: "6px", paddingY: "5px", marginLeft: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <EditIcon fontSize="14px" />
                </Box>

                <Box sx={{ backgroundColor: "#e7e9ef", borderRadius: "20%", paddingX: "6px", paddingY: "5px", marginLeft: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <DoDisturbAltIcon fontSize="14px" />
                </Box>

                <Box sx={{ backgroundColor: "#e7e9ef", borderRadius: "20%", paddingX: "6px", paddingY: "5px", marginLeft: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <LockIcon fontSize="14px" />
                </Box>

                <Button disableElevation={true} sx={{ marginX: "20px", backgroundColor: "#e7e9ef", color: "black", height: "25px", textTransform: "none" }} variant="contained">Assign to Profile</Button>

                <Button disableElevation={true} sx={{ backgroundColor: "#e7e9ef", color: "black", height: "25px", textTransform: "none" }} variant="contained">Assign to Group</Button>

                <Box sx={{ backgroundColor: "#e7e9ef", borderRadius: "20%", paddingX: "6px", paddingY: "5px", marginX: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <MoreVertIcon fontSize="14px" />
                </Box>

                <Button variant="text" disableElevation={true} sx={{ color: "black", height: "25px", textTransform: "none", textDecoration: 'underline' }} >Unselect All</Button>
              </Grid>

              <Grid item>
                <Box sx={{backgroundColor: "#e7e9ef", borderRadius: "20%", paddingX: "6px", paddingY: "5px", marginRight: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <DownloadIcon />
                </Box>
              </Grid>

            </Grid>


          </Box>





          <div style={{ position: "relative", zIndex: 0 }}>
            <DataGrid
              style={{ marginTop: "2px" }}
              rows={rowData}
              columns={columns}
              checkboxSelection
              localeText={{
                noRowsLabel: <></>,
              }}
              onRowClick={this.handleRowClick}
            />
          </div>
        </Grid>
      </Grid>
    );
  }
}
