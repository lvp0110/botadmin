// @ts-expect-error
import Vue, { createApp } from "@vue/compat";
import "./style.css";
import App from "./App.vue";
import { BootstrapVue } from "bootstrap-vue";
import IndexPage from "./pages/index.vue";
import AssistantsPage from "./pages/assistants/index.vue";
import AssistantsNewPage from "./pages/assistants/new/index.vue";
import AssistantsCodePage from "./pages/assistants/code/index.vue";
import { createWebHistory, createRouter } from "vue-router";
import AttrributesPage from "./pages/attributes/index.vue";
import AttrributesTypePage from "./pages/attributes/type/index.vue";
import AttrributesTypeNewPage from "./pages/attributes/type/new/index.vue";
import AttrributesTypeCodePage from "./pages/attributes/type/code/index.vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: IndexPage },
    {
      path: "/assistants",
      children: [
        { path: "", component: AssistantsPage },
        { path: "new", component: AssistantsNewPage },
        {
          path: ":code",
          children: [
            { path: "", component: AssistantsCodePage },
            { path: "edit", component: AssistantsNewPage },
          ],
        },
      ],
    },
    {
      path: "/attributes",
      children: [
        { path: '', component: AttrributesPage },
        {
          path: ":type",
          children: [
            { path: "", component: AttrributesTypePage },
            { path: "new", component: AttrributesTypeNewPage },
            {
              path: ":code",
              component: AttrributesTypeCodePage,
            },
          ],
        },
      ],
    },
  ],
});

// attributes
// characters

Vue.use(BootstrapVue);

createApp(App).use(router).mount("#app");
