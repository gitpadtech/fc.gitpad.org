import React from 'react';
import { graphql } from 'gatsby'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import DefaultLayout from '../components/layouts/default-layout';

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit,
    maxWidth: 960,
    margin: '0 auto'
  },
});

class Index extends React.Component {
  render() {
    const { data, classes } = this.props;
    const post = data.markdownRemark;
    return (
      <DefaultLayout
        activePagePath={data.sitePage.path}
      >
        <div className={classes.root}>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </DefaultLayout>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);

export const articleQuery = graphql`
  query articleQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
    sitePage(path: { eq: $slug }) {
      path
    }
  }
`;