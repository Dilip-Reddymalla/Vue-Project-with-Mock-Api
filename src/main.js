import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createBootstrap } from "bootstrap-vue-next";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
import "./assets/theme.css";

createApp(App).use(router).use(createBootstrap()).mount("#app");
