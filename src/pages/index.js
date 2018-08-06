import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import DefaultLayout from '../components/layouts/DefaultLayout';
import HomeSteps from '../components/HomeSteps';
import withRoot from '../withRoot';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2,
  },
  logo: {
    width: 160,
    height: 160,
    display: 'block',
    margin: '30px auto',
  },
  introduction: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'white',
    paddingBottom: theme.spacing.unit * 4,
  },
  title: {
    color: theme.palette.primary.main,
  },
  headline: {
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4,
    marginTop: theme.spacing.unit,
    maxWidth: 500,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.54)',
  },
});

class Index extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <DefaultLayout>
        <div className={classes.root}>
          <Paper className={classes.introduction} elevation={1}>
            <img className={classes.logo} src="./images/logo.png" />
            <Typography variant="display1" gutterBottom className={classes.title}>
              Finance Chart
            </Typography>
            <Typography
              variant="headline"
              component="h2"
              color="inherit"
              gutterBottom
              className={classes.headline}
            >
              High performance yet full features
            </Typography>
          </Paper>
          <HomeSteps />
        </div>
      </DefaultLayout>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
