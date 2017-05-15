import DefaultLayout from 'Components/layout/default/DefaultLayout';
import HomeComponent from 'Components/home/HomeComponent';
import UserListComponent from 'Components/user/UserListComponent';

const Routes = [
  {
    path: '/',
    component: DefaultLayout,
    routes: [
      {
        path: '/',
        exact: true,
        component: HomeComponent
      },
      {
        path: '/user',
        component: UserListComponent
      }
    ]
  }
];

export default Routes;
