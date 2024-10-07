// @ts-expect-error
import Vue, { createApp } from "@vue/compat";
import "./style.css";
import App from "./App.vue";
import { BootstrapVue } from "bootstrap-vue";
import IndexPage from "./pages/index.vue";
import ContentPageId from "./pages/content/code/index.vue";
import { createWebHistory, createRouter } from "vue-router";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: IndexPage },
    { path: "/content", component: IndexPage },
    { path: "/content/:code", component: ContentPageId },
  ],
});

Vue.use(BootstrapVue);

createApp(App).use(router).mount("#app");
