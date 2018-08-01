import React, { PureComponent } from 'react';
import {
  Chart,
  TimeSeriesDrawer,
  TimeSeriesVolumeDrawer,
  ChartWhiteTheme,
} from '@gitpad/finance-chart';

const shortenVolume = (v) => {
  const scaleV = v / 100;
  if (scaleV > 10000) {
    return `${(scaleV / 10000).toFixed(2)}万手`;
  }
  return `${scaleV.toFixed(2)}手`;
};

class RealTimeTimeSeries extends PureComponent {
  rootNode = null
  chart = null
  lastPrice = null
  componentDidMount() {
    this.init();
  }
  init() {
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
      ],
      detailProvider: (i, data) => {
        // const date = new Date();
        const current = data[i];
        // date.setTime(current.time * 60 * 1000);
        const riseColor = '#F55559';
        const fallColor = '#7DCE8D';
        const lastPrice = this.lastPrice;

        const autoColor = (key) => {
          return data[i][key] > lastPrice ? riseColor : fallColor;
        };

        return {
          title: current.time,
          tables: [
            {
              color: autoColor('price'),
              name: '价格',
              value: current.price.toFixed(2),
            },
            {
              color: autoColor('avg'),
              name: '均价',
              value: current.avg.toFixed(2),
            },
            {
              color: '#7B7E8D',
              name: '成交量',
              value: `${shortenVolume(current.volume)}`
            }
          ],
        };
      },
    });
    this.fetch();
  }
  fetch() {
    Promise.all([
      fetch('https://api.iextrading.com/1.0/stock/aapl/chart/1d')
        .then(res => res.json()),
      fetch('https://api.iextrading.com/1.0/stock/aapl/quote')
        .then(res => res.json()),
    ])
      .then(([timeSeries, quote]) => {
        const fallback = (key, item, i) => {
          return item.volume === 0 ? timeSeries[i - 1][key] : item[key];
        };
        const res = timeSeries.map((item, i) => ({
            price: fallback('close', item, i),
            avg: fallback('average', item, i),
            volume: item.volume,
            time: item.minute,
          }));
        this.lastPrice = quote.previousClose;
        this.chart.setLastPrice(quote.previousClose);
        // clear min value cache by using force clean, because default value of lastPrice is 0.01
        this.chart.setData(res, true);
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
export default RealTimeTimeSeries;
