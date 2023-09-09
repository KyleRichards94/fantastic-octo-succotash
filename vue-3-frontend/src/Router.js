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
  {
    path: "/ManageProducts",
    alias: "/ManageProducts",
    name: "ManageProducts",
    component: () => import("./components/ManageProducts"),
    children: [
      {
        path: '/addProduct',
        alias: "/addPropduct",
        name: "/addProduct",
        component: () => import("./components/productManagement/addProduct")
      },
      {
        path: '/editProduct',
        alias: "/editPropduct",
        name: "/editProduct",
        component: () => import("./components/productManagement/editProduct")
      },
      {
        path: '/deleteProduct',
        alias: "/deleteProduct",
        name: "/deleteProduct",
        component: () => import("./components/productManagement/deleteProduct")
      }

    ]
  },
  {
    path: "/addProduct",
    alias: "/addProduct",
    name: "addProduct",
    component: () => import("./components/productManagement/addProduct")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;