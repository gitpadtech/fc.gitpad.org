import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import DefaultLayout from '../components/layouts/DefaultLayout';
import withRoot from '../withRoot';

const styles = theme => ({
  root: {
    textAlign: 'center',
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
          <div className={classes.introduction}>
            <img className={classes.logo} src="./images/logo.png" />
            <Typography variant="display1" gutterBottom className={classes.title}>
              金融行情图
            </Typography>
            <Typography
              variant="headline"
              component="h2"
              color="inherit"
              gutterBottom
              className={classes.headline}
            >
              高性能、易扩展、移动优先
            </Typography>
          </div>
        </div>
      </DefaultLayout>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
