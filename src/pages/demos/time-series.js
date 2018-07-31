import React from 'react';
import DefaultLayout from '../../components/layouts/DefaultLayout';
import MarkdownDocs from '../../components/MarkdownDocs';
import doc from '../../docs/pages/demos/time-series/time-series.md';
import BasicDemo from '../../docs/pages/demos/time-series/basic';
import MockDemo from '../../docs/pages/demos/time-series/mock';
import RealtimeDemo from '../../docs/pages/demos/time-series/realtime';

export default (props) => (
  <DefaultLayout>
    <MarkdownDocs
      markdown={doc}
      demos={{
        'pages/demos/time-series/basic.js': {
          js: BasicDemo,
          raw: preval`
  module.exports = require('fs')
    .readFileSync(require.resolve('../../docs/pages/demos/time-series/basic.js'), 'utf8')
        `},
        'pages/demos/time-series/mock.js': {
          js: MockDemo,
          raw: preval`
  module.exports = require('fs')
    .readFileSync(require.resolve('../../docs/pages/demos/time-series/mock.js'), 'utf8')
        `},
        'pages/demos/time-series/realtime.js': {
          js: RealtimeDemo,
          raw: preval`
  module.exports = require('fs')
    .readFileSync(require.resolve('../../docs/pages/demos/time-series/mock.js'), 'utf8')
        `}
      }}
      {...props}
    />
  </DefaultLayout>
);
