import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import BuildIcon from '@material-ui/icons/Build'; // eslint-disable-line import/no-unresolved
import MarkdownElement from '../components/MarkdownElement';
import FileDownloadIcon from '../components/svgIcons/FileDownload';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
  },
  step: {
    background: theme.palette.background.paper,
    margin: `${theme.spacing.unit * 2}px 0`,
    padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px`,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    [theme.breakpoints.up('md')]: {
      borderRightWidth: 12,
      borderLeftWidth: 12,
    },
  },
  stepTitle: {
    display: 'flex',
    marginBottom: theme.spacing.unit * 3,
    alignItems: 'center',
  },
  stepIcon: {
    color: theme.palette.primary.dark,
    marginRight: theme.spacing.unit * 2,
    fontSize: 30,
  },
  stepBody: {
    paddingBottom: theme.spacing.unit * 2,
  },
  markdownElement: {
    maxWidth: `calc(100vw - ${(theme.spacing.unit * 5 + 1) * 2}px)`,
    '& pre, & pre[class*="language-"], & code': {
      backgroundColor: 'transparent',
    },
    '& pre, & pre[class*="language-"]': {
      padding: theme.spacing.unit,
      margin: 0,
    },
  },
});

function HomeSteps(props) {
  const classes = props.classes;

  return (
    <div className={classes.root}>
      <Paper className={classes.step} elevation={1}>
        <div className={classes.stepTitle}>
          <FileDownloadIcon className={classes.stepIcon} />
          <Typography variant="title">Installation</Typography>
        </div>
        <div className={classes.stepBody}>
          <Typography variant="subheading" gutterBottom>
            install with npm
          </Typography>
          <MarkdownElement
            className={classes.markdownElement}
            text={`
  \`\`\`sh
$ npm install @gitpad/finance-chart
  \`\`\`
                `}
          />
          <Typography variant="subheading" gutterBottom>
            or install with yarn
          </Typography>
          <MarkdownElement
            className={classes.markdownElement}
            text={`
  \`\`\`sh
$ yarn add @gitpad/finance-chart
  \`\`\`
                `}
          />
        </div>
      </Paper>
      <Paper className={classes.step} elevation={1}>
        <div className={classes.stepTitle}>
          <BuildIcon className={classes.stepIcon} />
          <Typography variant="title">Usage</Typography>
        </div>
        <div className={classes.stepBody}>
          <MarkdownElement
            className={classes.markdownElement}
            text={`
\`\`\`html
<div id="quote-chart"></div>
\`\`\`

  \`\`\`jsx
import { Chart, CandleStickDrawer } from '@gitpad/finance-chart';
new Chart({
  selector: '#quote-chart',
  data: [],
  mainDrawer: {
    constructor: CandleStickDrawer,
  },
});
  \`\`\`
                `}
          />
        </div>
      </Paper>
    </div>
  );
}

HomeSteps.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeSteps);
