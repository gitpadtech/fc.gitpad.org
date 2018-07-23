export default [
  {
    pathname: '/getting-started',
    children: [
      {
        pathname: '/getting-started/introduction',
      },
      {
        pathname: '/getting-started/usage',
      },
    ],
  },
  {
    pathname: '/',
    displayNav: false,
    title: false,
  },
];
