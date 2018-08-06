---
title: Basic
---

## Why ?

Chart often use to display realtime price and historical data in finance industry, but there is no pratical library on HTML5 platform. So, I want to make life easy...

Peeking the code before continuing:

```jsx
import { Chart, CandleStickDrawer } from '@gitpad/finance-chart';

new Chart({
  selector: '#quote-chart',
  data: [],
  mainDrawer: {
    constructor: CandleStickDrawer,
  },
});
```

### Drawer

**Main drawer** is responsible for painting the main area of chart, and **auxiliary drawer** is responsible for painting the remaining area.

<img src="/images/areas-description.png" style="max-width: 340px;" />

There is two drawers for main area so far.

* **CandleStickDrawer**: Painting candle stick chart
* **TimeSeriesDrawer**: Painting time series Chart

There is two drawers for auxiliary area too.

* **TimeSeriesVolumeDrawer**: Painting information about trading volumes of time series chart
* **CandleStickVolumeDrawer**: Painting information about trading volumes of candle stick chart

Even if **TimeSeriesVolumeDrawer** and **CandleStickVolumeDrawer** are similar but they have different logic.

you can extend or building a brand new **main drawer** and **auxiliary drawer** the  by using plugin.

Adding **y axis** and [moving average](https://en.wikipedia.org/wiki/Moving_average) indicator to main drawer:

```js
// ...
{
  mainDrawer: {
    constructor: CandleStickDrawer,
    options: {
      plugins: [
        createYAxisPlugin(),
      ],
      exclusivePlugins: [
        createMAPlugin([{
            key: '5',
            color: '#FF8E29',
          },
          {
            key: '10',
            color: '#ADE3F3',
          },
          {
            key: '20',
            color: '#EC6ED9',
          },
          {
            key: '60',
            color: '#01F46A',
          },
        ]),
      ],
    },
  },
}
// ...
```


Creating a [MACD](https://en.wikipedia.org/wiki/MACD) auxiliary drawer by combining two plugin like this:

```js
// ...
{
  auxiliaryDrawers: [
    {
      constructor: Drawer,
      options: {
        plugins: [
          createYAxisPlugin(),
        ],
        exclusivePlugins: [
          createMACDPlugin(),
        ],
      },
    },
  ],
}
// ...
```