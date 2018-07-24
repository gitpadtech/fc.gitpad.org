import React from 'react';
import GatsbyLink from 'gatsby-link';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
  }
});

function Link(props) {
  const { classes, className, ...rest } = props;
  return (
    <GatsbyLink
      className={`${classes.root} ${className ? className : ''}`}
      {...rest}
    />
  );
}

export default withStyles(styles)(Link);
