import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/hangman",
    component: () => import("../pages/Hangman.vue"),
  },
  {
    path: "/tic-tac-toe",
    component: () => import("../pages/TicTacToe.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
