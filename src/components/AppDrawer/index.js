import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Navigation from './Navigation';
import Link from '../../components/Link';

const styles = theme => ({
  toolbar: {
    ...theme.mixins.toolbar,
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  toolbarGutter: {
    ...theme.mixins.gutters(),
  },
});
const AppDrawer = ({ classes, ...rest }) =>
  <div>
    <div className={`${classes.toolbar} ${classes.toolbarGutter}`}>
      <Typography variant="title">
        <Link
          to="/"
        >
          Finance Chart
        </Link>
      </Typography>
    </div>
    <Divider />
    <Navigation {...rest} />
  </div>;

AppDrawer.propTypes = {
};

export default withStyles(styles)(AppDrawer);