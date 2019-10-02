import React from 'react';
import ListDemo from './components/ListDemo'
import ItemDemo from './components/ItemDemo'

const routes = [
  {
    path: '/',
    exact: false,
    main: () => <ListDemo />
  },
  {
    path: 'details/:id',
    exact: false,
    main: ({match}) => <ItemDemo match={match} />
  },
  // {
  //   path: '/a',
  //   exact: false,
  //   main: () => <ItemDemo />
  // },
]

export default routes;