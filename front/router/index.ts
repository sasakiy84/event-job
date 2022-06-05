import TopPage from "../pages/TopPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: TopPage,
    },
    {
      path: "/user/",
      name: "userTop",
      component: () => import("../pages/user/UserTop.vue"),
    },
    {
      path: "/user/new/",
      name: "userNew",
      component: () => import("../pages/user/UserNew.vue"),
    },
  ],
});

export default router;
