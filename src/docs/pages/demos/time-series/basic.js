import React, { PureComponent } from 'react';
import {
  Chart,
  TimeSeriesDrawer,
  TimeSeriesVolumeDrawer,
  ChartWhiteTheme
} from '@gitpad/finance-chart';

class TimeSeriesBasic extends PureComponent {
  rootNode = null
  chart = null
  componentDidMount() {
    this.chart = new Chart({
      theme: ChartWhiteTheme,
      selector: this.rootNode,
      data: [],
      tradeTimes: [
        {
          open: 90,
          close: 481,
        }
      ],
      mainDrawer: {
        constructor: TimeSeriesDrawer
      },
      auxiliaryDrawers: [
        {
          constructor: TimeSeriesVolumeDrawer
        }
      ]
    });
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
export default TimeSeriesBasic;
