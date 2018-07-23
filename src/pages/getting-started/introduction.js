import React from 'react';
import { graphql } from 'gatsby'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import DefaultLayout from '../../components/layouts/default-layout';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

class Index extends React.Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    const { classes, data } = this.props;
    const { open } = this.state;
    return (
      <DefaultLayout
        activePagePath={data.sitePage.path}
      >
        introduction
      </DefaultLayout>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);

export const queryGettingStartedIntroduction = graphql`
  query GettingStartedIntroduction($path: String!) {
    sitePage(path: { eq: $path }) {
      path
    }
  }
`;
