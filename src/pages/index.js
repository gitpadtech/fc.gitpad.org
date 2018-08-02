import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import DefaultLayout from '../components/layouts/DefaultLayout';

const styles = theme => ({
  root: {
    textAlign: 'center',
  },
  logo: {
    width: 160,
    height: 160,
    display: 'block',
    margin: '20px auto',
  },
  title: {
    color: '#473780',
  }
});

class Index extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <DefaultLayout>
        <div className={classes.root}>
          <img className={classes.logo} src="./images/logo.png" />
          <Typography variant="display1" gutterBottom className={classes.title}>
            Finance Chart
          </Typography>
        </div>
      </DefaultLayout>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);
