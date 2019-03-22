import Vue from "vue";
import BootstrapVue from "bootstrap-vue";

Vue.use(BootstrapVue);

import VueRouter from "vue-router";

Vue.use(VueRouter);

import AppPosts from "./container/AppPosts";

const routes = [
  { path: "/", redirect: "/posts", name: "home" },
  { path: "/posts", component: AppPosts, name: "posts" }
];

export const router = new VueRouter({
  mode: "history",
  routes
});
