import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Brightness4Icon from '@material-ui/icons/Brightness4';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  titleDesktop: {
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      display: 'none', // remove desktop title on small or below width screens
    },
  },
  titleMobile: {
    flexGrow: 1,
    [theme.breakpoints.up('md')]: {
      display: 'none', // remove mobile title on medium or above width screens
    },
  },
  darkModeButton: {
    marginLeft: theme.spacing(2)
  },
  appBar: {
  }
}));

export default function CustomAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.titleMobile}>
            Brinley M.
          </Typography>
          <Typography variant="h6" className={classes.titleDesktop}>
            Brinley Macnamara
          </Typography>
          <IconButton 
            color="inherit" 
            aria-label="dark-mode-toggle" 
            className={classes.darkModeButton}
            onClick={
              () => props.toggleDarkMode(props.darkIsEnabled ? 'light' : 'dark')}
          >
            <Brightness4Icon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}