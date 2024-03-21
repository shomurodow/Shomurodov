import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: function () {
      return import("../views/Home.vue");
    },
  },
  {
    path: "/keyboards",
    name: "keyboards",
    component: function () {
      return import("../views/Home.vue");
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
