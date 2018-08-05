import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import DefaultLayout from '../components/layouts/DefaultLayout';
import AppContent from '../components/AppContent';
import withRoot from '../withRoot';
import MarkdownElement from '../components/MarkdownElement';

const styles = theme => ({
});

class Article extends React.Component {
  render() {
    const { data, classes } = this.props;
    const post = data.markdownRemark;
    console.log(post.rawMarkdownBody);
    return (
      <DefaultLayout
        title={post.frontmatter.title}
      >
        <AppContent>
          <div className={classes.root}>
            <MarkdownElement
              text={post.rawMarkdownBody}
            />
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
      rawMarkdownBody
      html
      frontmatter {
        title
      }
    }
  }
`;
