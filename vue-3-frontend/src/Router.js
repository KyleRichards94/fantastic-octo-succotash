import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/Shop",
    alias: "/Shop",
    name: "Shop",
    component: () => import("./components/ShopFront")
  },
  {
    path: "/CommunityHub",
    alias: "/CommunityHub",
    name: "CommunityHub",
    component: () => import("./components/CommunityHub")
  },
  {
    path: "/MyAccount",
    alias: "/MyAccount",
    name: "MyAccount",
    component: () => import("./components/MyAccount")
  },
  
  {
    path: "/LogoutCard",
    alias: "/LogoutCard",
    name: "LogoutCard",
    component: () => import("./components/LogoutCard")
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;