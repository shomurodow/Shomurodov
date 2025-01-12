import { createRouter, createWebHistory } from "vue-router";
const routes = [
  // navigation
  {
    path: "/",
    name: "home",
    component: function () {
      return import("../pages/Home.vue");
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
