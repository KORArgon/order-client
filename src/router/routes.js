import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
const Popular = () =>
  import(/* webpackChunkName: "dashboard" */ "@/pages/Popular.vue");
const Main = () =>
  import(/* webpackChunkName: "dashboard" */ "@/pages/Main.vue");
const Side = () =>
  import(/* webpackChunkName: "dashboard" */ "@/pages/Side.vue");
const Drink = () =>
  import(/* webpackChunkName: "dashboard" */ "@/pages/Drink.vue");

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/popular",
    children: [
      {
        path: "popular",
        name: "popular",
        component: Popular,
      },
      {
        path: "main",
        name: "main",
        component: Main,
      },
      {
        path: "side",
        name: "side",
        component: Side,
      },
      {
        path: "drink",
        name: "drink",
        component: Drink,
      },
    ],
  },
  { path: "*", component: NotFound },
];

export default routes;
