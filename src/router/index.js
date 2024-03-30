import { createRouter, createWebHistory } from "vue-router";
import notFound from "@/pages/404.vue";
const routes = [
  // navigation
  {
    path: "/",
    name: "home",
    component: function () {
      return import("../pages/Home.vue");
    },
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: function () {
      return import("../pages/Portfolio.vue");
    },
  },
  // collection
  {
    path: "/music",
    name: "music",
    component: function () {
      return import("../pages/Music.vue");
    },
  },
  // 404 page
  {
    path: "/:404",
    name: "404",
    component: notFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
