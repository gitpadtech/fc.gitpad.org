export default [
  {
    pathname: '/demos',
    children: [
      {
        pathname: '/demos/time-series',
      },
      {
        pathname: '/demos/candle-stick'
      }
    ],
  },
  {
    pathname: '/',
    displayNav: false,
    title: false,
  },
];
