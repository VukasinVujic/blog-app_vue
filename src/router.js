import Vue from "vue";
import BootstrapVue from "bootstrap-vue";

Vue.use(BootstrapVue);

import VueRouter from "vue-router";

Vue.use(VueRouter);

import AppPosts from "./container/AppPosts";
import AppSinglePost from "./container/AppSinglePost";
import AddPost from "./container/AddPost";

const routes = [
  { path: "/", redirect: "/posts", name: "home" },
  { path: "/posts", component: AppPosts, name: "posts" },
  { path: "/post/:id", component: AppSinglePost, name: "single" },
  { path: "/add", component: AddPost, name: "add" }
];

export const router = new VueRouter({
  mode: "history",
  routes
});
