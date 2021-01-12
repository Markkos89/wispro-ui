import { asyncComponentLoader } from "utils";

const routes = [
  {
    exact: true,
    component: asyncComponentLoader(() => import("../../pages/AddCandidate")),
    path: "/add-candidate",
  },
  {
    exact: true,
    component: asyncComponentLoader(() => import("../../pages/DashboardPage")),
    path: "/dashboard",
  },
];

export default routes;
