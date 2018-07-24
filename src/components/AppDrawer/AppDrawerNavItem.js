import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import GatsbyLink from 'gatsby-link'
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';

const styles = theme => ({
  item: {
    display: 'block',
    paddingTop: 0,
    paddingBottom: 0,
  },
  itemLeaf: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    justifyContent: 'flex-start',
    textTransform: 'none',
    width: '100%',
  },
  buttonLeaf: {
    justifyContent: 'flex-start',
    textTransform: 'none',
    width: '100%',
    fontWeight: theme.typography.fontWeightRegular,
    '&.depth-0': {
      fontWeight: theme.typography.fontWeightMedium,
    },
  },
  link: {
    textDecoration: 'none',
    display: 'block',
    width: '100%',
  },
  active: {
    '& button': {
      color: theme.palette.primary.main,
    }
  },
});

class AppDrawerNavItem extends React.Component {
  state = {
    open: this.props.active,
  };

  componentDidMount() {
    // So we only run this logic once.
    if (!this.props.active) {
      return;
    }

    // Center the selected item in the list container.
    const activeElement = document.querySelector(`.${this.props.classes.active}`);
    if (activeElement && activeElement.scrollIntoView) {
      activeElement.scrollIntoView({});
    }
  }

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const {
      children,
      classes,
      depth,
      href,
      onClick,
      active,
      title,
      theme,
      ...other
    } = this.props;
    const style = {
      paddingLeft: 8 * (3 + 2 * depth),
    };

    if (href) {
      return (
        <ListItem
          className={classes.itemLeaf}
          disableGutters {...other}
          component="div"
        >
          <GatsbyLink
            to={href}
            className={classNames(classes.link, {
              [classes.active]: active
            })}
          >
            <Button
              className={classNames(classes.buttonLeaf, `depth-${depth}`)}
              component="button"
              disableRipple
              onClick={onClick}
              style={style}
            >
              {title}
            </Button>
          </GatsbyLink>
        </ListItem>
      );
    }
    return (
      <ListItem
        className={classes.item}
        disableGutters {...other}
      >
        <Button
          classes={{
            root: classes.button,
          }}
          onClick={this.handleClick}
          style={style}
        >
          {title}
        </Button>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          {children}
        </Collapse>
      </ListItem>
    );
  }
}

AppDrawerNavItem.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  depth: PropTypes.number.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
};

AppDrawerNavItem.defaultProps = {
};

export default withStyles(styles, {
  withTheme: true,
})(AppDrawerNavItem);
