import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export default function DrawerList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 400,
        bgcolor: 'background.paper',
        color: 'white',
        backgroundColor: '#050e2d',
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton
        sx={{
          "&:hover": {
            backgroundColor: "inherit",
          },
        }}
      >
        <ListItemText primary="ATM Settings" primaryTypographyProps={{fontSize: '14px', whiteSpace: 'nowrap'}} />
      </ListItemButton>
      <ListItemButton
        sx={{
          "&:hover": {
            backgroundColor: "inherit",
          },
        }}
      >
        <ListItemText primary="Business Setup" primaryTypographyProps={{fontSize: '14px', whiteSpace: 'nowrap'}} />
      </ListItemButton>
      <ListItemButton
        onClick={handleClick}
        sx={{
          backgroundColor: open ? '#008000' : 'initial',
          "&:hover": {
            backgroundColor: open ? '#008000' : 'initial',
          },
        }}
      >
        <ListItemText primary="User Management" primaryTypographyProps={{fontSize: '14px', whiteSpace: 'nowrap'}} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Users" primaryTypographyProps={{fontSize: '14px', whiteSpace: 'nowrap'}}/>
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>

            <ListItemText primary="Profiles" primaryTypographyProps={{fontSize: '14px', whiteSpace: 'nowrap'}} />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Groups" primaryTypographyProps={{fontSize: '14px', whiteSpace: 'nowrap'}}/>
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton>
        <ListItemText primary="License Management" primaryTypographyProps={{fontSize: '14px', whiteSpace: 'nowrap'}} />
      </ListItemButton>
    </List>
  );
}
