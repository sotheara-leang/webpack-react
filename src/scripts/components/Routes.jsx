import DefaultLayout from 'Components/layout/default/DefaultLayout';
import HomeComponent from 'Components/home/HomeComponent';
import ListUserComponent from 'Components/user/ListUserComponent';
import CreateUserComponent from 'Components/user/CreateUserComponent';
import ListRoleComponent from 'Components/role/ListRoleComponent';

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
        exact: true,
        component: ListUserComponent
      },
      {
        path: '/user/new',
        component: CreateUserComponent
      },
      {
        path: '/role',
        component: ListRoleComponent
      }
    ]
  }
];

export default Routes;
