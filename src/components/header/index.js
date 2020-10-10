import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Redirect} from "react-router-dom"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const  Header = () => {
  const classes = useStyles();
  const [resetAll,setResetAll] = useState(false);
  const reset = () =>{
      localStorage.removeItem('products');
      setResetAll(true);
  }

  return (
    <div className={classes.root}>
       {resetAll ? (
          <Redirect to="/" />) :( 
      <AppBar position="static">
        <Toolbar>
          
          <Typography edge='start' variant="h6" className={classes.title}>
            e-Commerce Gapsi
          </Typography>
          <IconButton edge="end" className={classes.menuButton} onClick={reset} color="inherit" aria-label="menu">
          <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>)}
    </div>
  );
}

export default Header;