import React from 'react';
import DefaultLayout from '../../components/layouts/DefaultLayout';
import MarkdownDocs from '../../components/MarkdownDocs';
import doc from '../../docs/pages/demos/candle-stick/candle-stick.md';
import BasicComponent from '../../docs/pages/demos/candle-stick/basic';

export default (props) => (
  <DefaultLayout>
    <MarkdownDocs
      markdown={doc}
      demos={{
        'pages/demo/candle-stick/basic.js': {
          js: BasicComponent,
          raw: preval`
  module.exports = require('fs')
    .readFileSync(require.resolve('../../docs/pages/demos/candle-stick/basic.js'), 'utf8')
        `}
      }}
      {...props}
    />
  </DefaultLayout>
);
