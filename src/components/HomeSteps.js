import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
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
  leftStep: {
    borderBottomWidth: 0,
    [theme.breakpoints.up('md')]: {
      borderBottomWidth: 12,
      borderRightWidth: 0,
    },
  },
  rightStep: {
    borderTopWidth: 0,
    [theme.breakpoints.up('md')]: {
      borderTopWidth: 12,
      borderLeftWidth: 0,
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
  divider: {
    marginBottom: theme.spacing.unit * 2,
  },
  link: {
    marginTop: theme.spacing.unit,
    display: 'block',
  },
  img: {
    maxWidth: 500,
    width: '100%',
    height: 'auto',
  },
});

function HomeSteps(props) {
  const classes = props.classes;

  return (
    <div className={classes.root}>
      <div className={classNames(classes.step, classes.leftStep)}>
        <div className={classes.stepTitle}>
          <FileDownloadIcon className={classes.stepIcon} />
          <Typography variant="title">安装</Typography>
        </div>
        <div className={classes.stepBody}>
          <Typography variant="subheading" gutterBottom>
            从npm安装
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
            或者使用yarn安装
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
      </div>
      <div className={classes.step}>
        <div className={classes.stepTitle}>
          <BuildIcon className={classes.stepIcon} />
          <Typography variant="title">使用</Typography>
        </div>
        <div className={classes.stepBody}>
          <MarkdownElement
            className={classes.markdownElement}
            text={`
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
      </div>
    </div>
  );
}

HomeSteps.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeSteps);
