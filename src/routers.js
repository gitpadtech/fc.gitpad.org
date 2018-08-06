export default [
  {
    pathname: '/getting-started',
    children: [
      {
        pathname: '/getting-started/installation',
      },
      {
        pathname: '/getting-started/basic',
      },
    ]
  },
  {
    pathname: '/guides',
    children: [
      {
        pathname: '/guides/time-series',
      },
      {
        pathname: '/guides/candle-stick',
      },
    ]
  },
  {
    pathname: '/demos',
    children: [
      {
        pathname: '/demos/time-series',
      },
      {
        pathname: '/demos/candle-stick'
      },
    ],
  },
  {
    pathname: '/',
    displayNav: false,
    title: false,
  },
];
