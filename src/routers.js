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
