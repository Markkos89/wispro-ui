import { asyncComponentLoader } from 'utils'

const routes = [
  {
    exact: true,
    component: asyncComponentLoader(() => import('../../pages/DashboardPage')),
    path: '/dashboard'
  },
  {
    exact: true,
    component: asyncComponentLoader(() =>
      import('../../pages/ResourcesConsume')
    ),
    path: '/resources'
  }
]

export default routes
