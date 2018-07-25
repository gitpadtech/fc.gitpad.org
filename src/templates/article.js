/**
 * This will lose all css in production build
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withDefaultLayout from '../components/layouts/withDefaultLayout';
import AppContent from '../components/AppContent';

const styles = theme => ({
});

class Article extends React.Component {
  render() {
    const { data, classes } = this.props;
    const post = data.markdownRemark;
    return (
      <AppContent>
        <div className={classes.root}>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </AppContent>
    );
  }
}

Article.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withDefaultLayout(withStyles(styles)(Article));

export const articleQuery = graphql`
  query articleQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
