// src/components/Navbar.js
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Paper
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux'
import {setUid} from '../Store/userSlice';
 
//auth
import signOut from '../FirebaseAuth.js'; 

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const dispatch = useDispatch(); 

  const signOut = async () =>{
    signOut()
    .then((usr) => {
        console.log('signedout'); 
        dispatch(setUid(null));
    })
    .catch((error) => {
      console.log('failed ot signout');
    });
  }

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const listItems = [
    { text: 'Proposals' , function: null},
    { text: 'Customers',  function: null},
    { text: 'Settings' , function: null},
    { text: 'Logout', function: ()=>signOut()},
  ];

  const drawerList = () => (
 
      <List>
        {listItems.map((item, index) => (
          <ListItem button key={index} onClick={item.function}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
  );




  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          The Proposium
        </Typography>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
        >
          {drawerList()}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
