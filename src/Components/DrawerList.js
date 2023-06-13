import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

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
      <ListItemButton>
        <ListItemIcon style={{ color: 'white', fontSize: "12" }}>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="ATM Settings" primaryTypographyProps={{fontSize: '14px', whiteSpace: 'nowrap'}} />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon style={{ color: 'white', fontSize: "12" }}>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Business Setup" primaryTypographyProps={{fontSize: '14px', whiteSpace: 'nowrap'}} />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon style={{ color: 'white', fontSize: "12" }}>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="User Management" primaryTypographyProps={{fontSize: '14px', whiteSpace: 'nowrap'}} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon style={{ color: 'white' }}>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
