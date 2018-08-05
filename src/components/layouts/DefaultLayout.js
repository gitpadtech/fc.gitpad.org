import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Helmet } from "react-helmet";
import classNames from 'classnames';
import { withRouter } from 'react-router'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import AppDrawer from '../AppDrawer';
import { page2Title } from '../../utils/helper';

const drawerWidth = 240;

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

const styles = theme => ({
  '@global': {
    '*': {
      '-webkit-tap-highlight-color': 'transparent',
    },
    body: {
      margin: 0,
    }
  },
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBarHome: {
    boxShadow: 'none',
    [theme.breakpoints.up('lg')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  nav: {
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
  paper: {
    width: drawerWidth,
    backgroundColor: theme.palette.background.paper,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    paddingTop: 56,
    [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: {
      paddingTop: 48,
    },
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64,
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: drawerWidth,
    }
  },
});

class DefaultLayout extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  handleDrawerOpen = () => {
    this.setState({ mobileOpen: true });
  };

  handleDrawerClose = () => {
    this.setState({ mobileOpen: false });
  };

  render() {
    const { classes, location, title } = this.props;
    const isHome = location.pathname === '/';
    const { mobileOpen } = this.state;
    return (
      <div className={classes.root}>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <AppBar className={classes.appBarHome}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.nav}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              {page2Title(location.pathname)}
            </Typography>
          </Toolbar>
        </AppBar>
        <Hidden>
          <SwipeableDrawer
            classes={{
              paper: classNames(classes.paper, 'algolia-drawer'),
            }}
            disableBackdropTransition={!iOS}
            variant="temporary"
            open={mobileOpen}
            onOpen={this.handleDrawerOpen}
            onClose={this.handleDrawerClose}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <AppDrawer />
          </SwipeableDrawer>
        </Hidden>
        <Hidden mdDown implementation="css">
          <Drawer
            classes={{
              paper: classes.paper,
            }}
            variant="permanent"
            open
          >
            <AppDrawer />
          </Drawer>
        </Hidden>
        <main className={classNames(classes.content)}>
          {this.props.children}
        </main>
      </div>
    );
  }
}

DefaultLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  title: PropTypes.string,
};

export default withRouter(withStyles(styles, { withTheme: true })(DefaultLayout));