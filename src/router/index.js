import { createRouter, createWebHistory } from "vue-router";
import { authStore } from "@/store/auth";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("@/pages/main/MainPage.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "about",
        component: () => import("@/pages/main/AboutPage.vue"),
      },
      {
        path: "adress",
        component: () => import("@/pages/main/AdressPage.vue"),
      },
      {
        path: "contact",
        component: () => import("@/pages/main/ContactPage.vue"),
      },
      {
        path: "catalog/:page",
        component: () => import("@/pages/main/MainPage.vue"),
      },
      {
        path: "product/:id",
        component: () => import("@/pages/main/ProductPage.vue"),
      },
      {
        path: "favorites",
        component: () => import("@/pages/main/FavoritesPage.vue"),
      },
      {
        path: "cart",
        component: () => import("@/pages/main/CartPage.vue"),
      },
    ],
  },

  {
    path: "/login",
    component: () => import("@/layouts/DefaultLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("@/pages/auth/LoginPage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = authStore.accessToken; // ✅ ВАЖНО

  if (to.meta.requiresAuth && !token) {
    return next("/login");
  }

  if (to.path === "/login" && token) {
    return next("/");
  }

  next();
});

export default router;
