import { createRouter, createWebHistory } from "vue-router";

import MainLayout from "@/layouts/MainLayout.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

import Home from "../pages/main/MainPage.vue";
import About from "../pages/main/AboutPage.vue";
import Adress from "../pages/main/AdressPage.vue";
import Contact from "../pages/main/ContactPage.vue";
import Login from "../pages/auth/LoginPage.vue";

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "",
        component: Home,
      },
      {
        path: "about",
        component: About,
      },
      {
        path: "adress",
        component: Adress,
      },
      {
        path: "contact",
        component: Contact,
      },
      // router/index.js
      {
        path: "/catalog/:page",
        name: "Catalog",
        component: () => import("../pages/main/MainPage.vue"),
      },
      {
        path: "/product/:id",
        name: "Product",
        component: () => import("../pages/main/ProductPage.vue"),
      },
      {
        path: "/favorites",
        name: "Favorites",
        component: () => import("../pages/main/FavoritesPage.vue"),
      },
    ],
  },

  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/login",
        component: Login,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");

  if (!token && to.path !== "/login") {
    next("/login");
  } else if (token && to.path === "/login") {
    next("/");
  } else {
    next();
  }
});

export default router;
