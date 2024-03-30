import { createRouter, createWebHistory } from "vue-router";
import notFound from "@/views/404.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: function () {
      return import("../views/Home.vue");
    },
  },
  {
    path: "/music",
    name: "music",
    component: function () {
      return import("../views/Music.vue");
    },
  },
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
