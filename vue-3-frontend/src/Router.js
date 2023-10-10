import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/Home",
    name: "HomePage",
    component: () => import("./components/Homepage")
  },
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
    path: "/signUp",
    alias: "/signUp",
    name: "signUp",
    component: () => import("./components/signUp")
  },
  {
    path:"/addPost",
    alias: "/addPost",
    name: "addPost",
    component: () => import("./components/CommunityHubFeatures/addPost")
  },
  {
    path:"/browsePosts",
    alias: "/browsePosts",
    name: "browsePosts",
    component: () => import("./components/CommunityHubFeatures/browsePosts")
  },
  {
    path: "/browsePosts/viewer/:objFilePath/:postId", // Add a dynamic route parameter for the objFilePath
    name: "3DviewPort",
    component: () => import("./components/CommunityHubFeatures/3DviewPort"), // The ModelViewer component
    props: true, // Pass route params as props
  },
  {
    path: "/MyAccount",
    alias: "/MyAccount",
    name: "MyAccount",
    component: () => import("./components/MyAccount")
  },
  {
    path: "/LoginCard",
    alias: "/LoginCard",
    name: "LoginCard",
    component: () => import("./components/LoginCard")
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
        name: "addProduct",
        component: () => import("./components/productManagement/addProduct")
      },
      {
        path: '/editProduct',
        alias: "/editPropduct",
        name: "editProduct",
        component: () => import("./components/productManagement/editProduct")
      },
      {
        path: '/deleteProduct',
        alias: "/deleteProduct",
        name: "deleteProduct",
        component: () => import("./components/productManagement/deleteProduct")
      }

    ]
  },
  {
    path: "/favouritePosts",
    alias: "/favouritePosts",
    name: "favouritePosts",
    component: () => import("./components/favouritePostManagement/favouritePostsPage")
  },
  {
    path: "/BrowsePostsButStaff",
    alias: "/BrowsePostsButStaff",
    name: "BrowsePostsButStaff",
    component: () => import("./components/BrowsePostsButStaff"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;