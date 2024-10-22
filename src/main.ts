// @ts-expect-error
import Vue, { createApp } from "@vue/compat";
import App from "./App.vue";
import { BootstrapVue } from "bootstrap-vue";
import { createWebHistory, createRouter } from "vue-router";

import IndexPage from "./pages/index.vue";
import AssistantsPage from "./pages/assistants/index.vue";
import AssistantsNewPage from "./pages/assistants/new/index.vue";
import AssistantsCodePage from "./pages/assistants/code/index.vue";
import AssistantsCodeEditPage from "./pages/assistants/code/edit/index.vue";
import AttributesPage from "./pages/attributes/index.vue";
import AttributesTypePage from "./pages/attributes/type/index.vue";
import AttributesTypeNewPage from "./pages/attributes/type/new/index.vue";
import AttributesTypeCodePage from "./pages/attributes/type/code/index.vue";
import PersonalityPage from './pages/personality/index.vue'
import PersonalityNewPage from './pages/personality/new/index.vue'
import PersonalityCodePage from './pages/personality/code/index.vue'
import PersonalityCodeEditPage from './pages/personality/code/edit/index.vue'
import { propsStore } from "./store/props-store";

import "./style.css";
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
            { path: "edit", component: AssistantsCodeEditPage },
          ],
        },
      ],
    },
    {
      path: "/attributes",
      children: [
        { path: "", component: AttributesPage },
        {
          path: ":type",
          children: [
            { path: "", component: AttributesTypePage },
            { path: "new", component: AttributesTypeNewPage },
            {
              path: ":code",
              component: AttributesTypeCodePage,
            },
          ],
        },
      ],
    },
    {
      path: "/personality",
      children: [
        { path: "", component: PersonalityPage },
        { path: "new", component: PersonalityNewPage },
        {
          path: ":code",
          children: [
            {
              path: '',
              component: PersonalityCodePage,
            },
            {
              path: 'edit',
              component: PersonalityCodeEditPage,
            }
          ]
        },
      ],
    },
  ],
});

Vue.use(BootstrapVue);

createApp(App).use(router).use(propsStore).mount("#app");
