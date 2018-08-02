import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import DefaultLayout from '../components/layouts/DefaultLayout';
import AppContent from '../components/AppContent';
import withRoot from '../withRoot';

const styles = theme => ({
});

class Article extends React.Component {
  render() {
    const { data, classes } = this.props;
    const post = data.markdownRemark;
    return (
      <DefaultLayout>
        <AppContent>
          <div className={classes.root}>
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </AppContent>
      </DefaultLayout>
    );
  }
}

Article.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Article));

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
