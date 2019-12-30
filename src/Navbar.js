import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import './App.css';
import logomain from './logo-main.svg';

const useStyles = makeStyles(theme => ({
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

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>      
      <AppBar position="static">
      <container className="container-width">
        <Toolbar>
          {/*<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            <img 
            width="70"
            src={logomain}
            alt="none" 
            />
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
        </container>
      </AppBar>
      <AppBar position="static">
      <Typography justifyContent="center" variant="h6" className="latest-sec">
            Listings
          </Typography>
      </AppBar>
    </div>
  );
}