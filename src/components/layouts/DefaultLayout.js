import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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
import withRoot from '../../withRoot';
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
  },
  appBarShift: {
    [theme.breakpoints.up('lg')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
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
    padding: theme.spacing.unit * 3,
    paddingTop: 56,
    [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: {
      paddingTop: 48,
    },
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64,
    },
  },
  contentShift: {
    [theme.breakpoints.up('lg')]: {
      marginLeft: drawerWidth,
    }
  }
});

class ResponsiveDrawer extends React.Component {
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
    const { classes, location } = this.props;
    const isHome = location.pathname === '/';
    const { mobileOpen } = this.state;
    return (
      <div className={classes.root}>
        <AppBar className={isHome ? classes.appBarHome : classes.appBarShift}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={ isHome ? '' : classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              {page2Title(location.pathname)}
            </Typography>
          </Toolbar>
        </AppBar>
        <Hidden lgUp={!isHome}>
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
        {isHome ? null : (
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
        )}
        <main className={classNames(classes.content, {
          [classes.contentShift]: !isHome
        })}>
          {this.props.children}
        </main>
      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withRouter(withRoot(withStyles(styles, { withTheme: true })(ResponsiveDrawer)));