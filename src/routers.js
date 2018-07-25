export default [
  {
    pathname: '/getting-started',
    children: [
      {
        pathname: '/getting-started/introduction',
      }
    ],
  },
  {
    pathname: '/demos',
    children: [
      {
        pathname: '/demos/time-share-chart/basic',
      }
    ],
  },
  {
    pathname: '/',
    displayNav: false,
    title: false,
  },
];
