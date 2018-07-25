import React from 'react';
import withDefaultLayout from '../../../components/layouts/withDefaultLayout';
import MarkdownDocs from '../../../components/MarkdownDocs';
import doc from '../../../docs/pages/demo/time-share-chart/time-share-chart.md';
import BasicComponent from '../../../docs/pages/demo/time-share-chart/basic';

export default withDefaultLayout(() => (
  <MarkdownDocs
    markdown={doc}
    demos={{
      'pages/demo/time-share-chart/basic.js': {
        js: BasicComponent,
        raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('../../../docs/pages/demo/time-share-chart/basic.js'), 'utf8')
      `}
    }}
  />
));
