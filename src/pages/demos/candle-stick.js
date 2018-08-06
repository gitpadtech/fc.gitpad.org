import React from 'react';
import DefaultLayout from '../../components/layouts/DefaultLayout';
import MarkdownDocs from '../../components/MarkdownDocs';
import doc from '../../docs/pages/demos/candle-stick/candle-stick.md';
import BasicDemo from '../../docs/pages/demos/candle-stick/basic';
import MockDemo from '../../docs/pages/demos/candle-stick/mock';
import LoadMoreDemo from '../../docs/pages/demos/candle-stick/loadMore';
import IndicatorsDemo from '../../docs/pages/demos/candle-stick/indicators';
import withRoot from '../../withRoot';

export default withRoot((props) => (
  <DefaultLayout>
    <MarkdownDocs
      markdown={doc}
      demos={{
        'pages/demos/candle-stick/basic.js': {
          js: BasicDemo,
          raw: preval`
  module.exports = require('fs')
    .readFileSync(require.resolve('../../docs/pages/demos/candle-stick/basic.js'), 'utf8')
        `},
        'pages/demos/candle-stick/mock.js': {
          js: MockDemo,
          raw: preval`
  module.exports = require('fs')
    .readFileSync(require.resolve('../../docs/pages/demos/candle-stick/mock.js'), 'utf8')
        `},
        'pages/demos/candle-stick/loadMore.js': {
          js: LoadMoreDemo,
          raw: preval`
  module.exports = require('fs')
    .readFileSync(require.resolve('../../docs/pages/demos/candle-stick/loadMore.js'), 'utf8')
        `},
        'pages/demos/candle-stick/indicators.js': {
          js: IndicatorsDemo,
          raw: preval`
  module.exports = require('fs')
    .readFileSync(require.resolve('../../docs/pages/demos/candle-stick/indicators.js'), 'utf8')
        `},
      }}
      {...props}
    />
  </DefaultLayout>
));
