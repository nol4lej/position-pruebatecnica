import "@config/bootstrap.js";
import vuetify from "@config/vuetify";
import { createApp } from "vue";
import { router } from "@router";
import App from "./app.vue";
import store from './store';

createApp(App)
.use(vuetify)
.use(router)
.use(store)
.mount("#root")
