/**
 * This will lost all css in production build
 */

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

class Article extends React.Component {
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

Article.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Article);

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

/**
 * This will have css in producdtion build
 */
// import React from 'react';
// export default () => <div>hello</div>