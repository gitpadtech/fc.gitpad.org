import React from 'react';
import DefaultLayout from '../../components/layouts/DefaultLayout';
import MarkdownDocs from '../../components/MarkdownDocs';
import doc from '../../docs/pages/demos/time-series/time-series.md';
import BasicComponent from '../../docs/pages/demos/time-series/basic';
import MockComponent from '../../docs/pages/demos/time-series/mock';

export default (props) => (
  <DefaultLayout>
    <MarkdownDocs
      markdown={doc}
      demos={{
        'pages/demo/time-series/basic.js': {
          js: BasicComponent,
          raw: preval`
  module.exports = require('fs')
    .readFileSync(require.resolve('../../docs/pages/demos/time-series/basic.js'), 'utf8')
        `},
        'pages/demo/time-series/mock.js': {
          js: MockComponent,
          raw: preval`
  module.exports = require('fs')
    .readFileSync(require.resolve('../../docs/pages/demos/time-series/mock.js'), 'utf8')
        `}
      }}
      {...props}
    />
  </DefaultLayout>
);
