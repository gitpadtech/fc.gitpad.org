import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import DefaultLayout from '../components/layouts/default-layout';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

class Index extends React.Component {
  render() {
    const { classes, data } = this.props;
    return (
      <DefaultLayout
        activePagePath={data.sitePage.path}
      >
        <div className={classes.root}>
          <Typography variant="display1" gutterBottom>
            Material-UI
          </Typography>
          <Typography variant="subheading" gutterBottom>
            example project
          </Typography>
          <Button variant="contained" color="secondary">
            Home Page
          </Button>
        </div>
      </DefaultLayout>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);

export const queryIndexInfo = graphql`
  query IndexInfo($path: String!) {
    sitePage(path: { eq: $path }) {
      path
    }
  }
`;
