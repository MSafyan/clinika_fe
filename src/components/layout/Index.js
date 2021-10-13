import React from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';

// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Button } from '@material-ui/core';

// import AppMenu from './AppMenu';

import { connect } from "react-redux";
import {LOGOUT} from '../../actions/authActions'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 0;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    background:theme.palette.backgroundSecondary.default,
    [theme.breakpoints.down('xs')]: {
      width: '100vw',
      minHeight: '100vh',
      height:'100%',
      zIndex: '1202'
    }
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
    [theme.breakpoints.down('xs')]: {
      width: 0,
      display:'none',
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    padding:'1rem'
  },
  hideCard:{
    [theme.breakpoints.down('xs')]: {
      display:"none !important"
    }
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  logo:{
    margin:'auto',
    display:'flex',
    alignItems:"baseline",
    color:theme.palette.lightFill.main
  },
  lightFill:{
    color:theme.palette.lightFill.main
  }
}));

const Index = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
      // console.log(props);
      setOpen(false);
    };
    return (
        <>
      <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
          <Link href='/' style={{ textDecoration: 'none' }}>
							<Button variant='cantained' className={classes.getStartMobile}>
								All Patients
							</Button>
						</Link>
          {props.isAuthenticated === false ? (
						<Link href='/login' style={{ textDecoration: 'none' }}>
							<Button variant='outlined'>
								SignUp
							</Button>
						</Link>
						) : (
            <Link style={{ textDecoration: 'none' }}>
							<Button variant='outlined' onClick={()=>props.LOGOUT()} className={classes.getStartMobile}>
								LogOut
							</Button>
						</Link>
						)}
        </Toolbar>
      </AppBar>
      {/* <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <div className={classes.logo}>
            <Typography variant="h4">
              V
            </Typography>
            <Typography variant="h6">
              olante
            </Typography>
          </div>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon className={classes.lightFill}/>
          </IconButton>
        </div>
        <Divider />
        <AppMenu />
      </Drawer> */}
      <main style={{padding:"1rem",width:"-webkit-fill-available"}}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          {props.children}
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
        </>
    )
}


const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  {LOGOUT}
  )(Index);