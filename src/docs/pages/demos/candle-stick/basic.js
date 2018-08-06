import React, { PureComponent } from 'react';
import {
  Chart,
  ChartWhiteTheme,
  CandleStickDrawer,
  CandleStickVolumeDrawer,
  createYAxisPlugin,
} from '@gitpad/finance-chart';

class CandleStickChart extends PureComponent {
  rootNode = null
  chart = null
  componentDidMount() {
    this.chart = new Chart({
      theme: ChartWhiteTheme,
      selector: this.rootNode,
      data: [],
      mainDrawer: {
        constructor: CandleStickDrawer,
        options: {
          plugins: [
            createYAxisPlugin(),
          ]
        }
      },
      auxiliaryDrawers: [
        {
          constructor: CandleStickVolumeDrawer,
        }
      ]
    });
  }
  componentWillUnmount() {
    this.chart.destroy();
  }
  render() {
    return (
      <div
        style={{
          width: '100%',
          height: '500px',
        }}
        ref={ref => this.rootNode = ref}
      >
      </div>
    )
  }
}

export default CandleStickChart;
