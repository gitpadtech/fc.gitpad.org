import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import AppDrawerNavItem from './AppDrawerNavItem';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 3,
  },
});

class Navigation extends React.Component {
  state = { open: true };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List
          component="nav"
        >
          <AppDrawerNavItem
            title="getting started"
            depth={0}
            href="baidu"
          />
          <AppDrawerNavItem
            title="Demos"
            depth={0}
          >
            <AppDrawerNavItem
              title="demo1"
              depth={1}
              href="https://baidu.com"
            />
          </AppDrawerNavItem>
        </List>
      </div>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);