import DefaultLayout from 'Components/layout/default/DefaultLayout';
import HomeComponent from 'Components/home/HomeComponent';
import UserListComponent from 'Components/user/UserListComponent';
import RoleListComponent from 'Components/role/RoleListComponent';

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
      },
      {
        path: '/role',
        component: RoleListComponent
      }
    ]
  }
];

export default Routes;
