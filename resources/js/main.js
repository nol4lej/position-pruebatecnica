import "@config/bootstrap.js";
import vuetify from "@config/vuetify";
import { createApp } from "vue";
import { router } from "@router";
import App from "./app.vue";

createApp(App)
.use(vuetify)
.use(router)
.mount("#root")
