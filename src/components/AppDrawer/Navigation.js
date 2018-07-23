import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import AppDrawerNavItem from './AppDrawerNavItem';
import { page2Title } from '../../utils/helper';
import ROUTERS from '../../routers';


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

function renderNavItems(pages, activePagePath, depth = 0) {
  return pages
  .filter(page => !(page.displayNav === false))
  .map(page => {
    const title = page2Title(page.pathname);
    const active = activePagePath.indexOf(page.pathname) !== -1;
    if (page.children && page.children.length > 1) {
      return (
        <AppDrawerNavItem
          title={title}
          key={title}
          depth={0}
          active={active}
        >
          { renderNavItems(page.children, activePagePath, depth + 1) }
        </AppDrawerNavItem>
      );
    }
    return (
      <AppDrawerNavItem
        title={title}
        key={title}
        depth={depth}
        active={active}
        href={page.children ? page.children[0].pathname : page.pathname}
      />
    );
  });
}

class Navigation extends React.Component {
  state = { open: true };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes, activePagePath } = this.props;

    return (
      <div className={classes.root}>
        <List
          component="nav"
        >
          {
            renderNavItems(ROUTERS, activePagePath)
          }
        </List>
      </div>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
  activePagePath: PropTypes.string.isRequired,
};

export default withStyles(styles)(Navigation);