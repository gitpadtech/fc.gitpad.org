import React from 'react';
import PropTypes from 'prop-types';
import warning from 'warning';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MarkdownElement from './MarkdownElement';
import AppContent from './AppContent';
import Demo from './Demo';
import {
  getHeaders,
  getContents,
} from '../utils/parseMarkdown';

const styles = theme => ({
  root: {
    marginBottom: 100,
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  markdownElement: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    padding: `0 ${theme.spacing.unit}px`,
  },
});

const demoRegexp = /^"demo": "(.*)"/;
const SOURCE_CODE_ROOT_URL = 'https://github.com/gitpadtech/finance-chart.gitpad.org/tree/master';

function MarkdownDocs(props) {
  const { classes, demos, markdown, markdownLocation: markdownLocationProp } = props;
  const contents = getContents(markdown);
  const headers = getHeaders(markdown);

  let markdownLocation = markdownLocationProp || props.location.pathname;

  if (!markdownLocationProp) {
    const token = markdownLocation.replace(/\/$/, '').split('/');
    token.push(token[token.length - 1]);
    markdownLocation = token.join('/');

    if (headers.filename) {
      markdownLocation = headers.filename;
    } else {
      markdownLocation = `/src/docs/pages${markdownLocation}.md`;
    }
  }
  return (
    <AppContent className={classes.root}>
      <div className={classes.header}>
        <Button component="a" href={`${SOURCE_CODE_ROOT_URL}${markdownLocation}`}>
          {'Edit this page'}
        </Button>
      </div>
      {contents.map((content, index) => {
        const match = content.match(demoRegexp);

        if (match && demos) {
          const demoOptions = JSON.parse(`{${content}}`);

          const name = demoOptions.demo;
          warning(demos && demos[name], `Missing demo: ${name}.`);
          return (
            <Demo
              key={content}
              js={demos[name].js}
              raw={demos[name].raw}
              index={index}
              demoOptions={demoOptions}
              githubLocation={`${SOURCE_CODE_ROOT_URL}/src/docs/${name}`}
            />
          );
        }

        return <MarkdownElement className={classes.markdownElement} key={content} text={content} />;
      })}
    </AppContent>
  );
}

MarkdownDocs.propTypes = {
  classes: PropTypes.object.isRequired,
  demos: PropTypes.object,
  markdown: PropTypes.string.isRequired,
  // You can define the direction location of the markdown file.
  // Otherwise, we try to determine it with an heuristic.
  markdownLocation: PropTypes.string,
  location: PropTypes.object.isRequired,
};

MarkdownDocs.defaultProps = {
};


export default withStyles(styles)(MarkdownDocs);
