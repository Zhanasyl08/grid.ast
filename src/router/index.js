import { createRouter, createWebHistory } from "vue-router";

import Home from "../MainPage.vue";
import About from "../AboutPage.vue";
import Login from "../LoginPage.vue";
import Adress from "../AdressPage.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/login", component: Login },
  { path: "/adress", component: Adress },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
