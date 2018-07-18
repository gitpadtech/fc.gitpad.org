import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Navigation from './Navigation';

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
const AppDrawer = ({ classes }) =>
  <div>
    <div className={`${classes.toolbar} ${classes.toolbarGutter}`}>
      <Typography variant="title">
        Material-UI
      </Typography>
    </div>
    <Divider />
    <Navigation />
  </div>;

export default withStyles(styles)(AppDrawer);