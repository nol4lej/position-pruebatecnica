import { createMemoryHistory, createRouter } from "vue-router";
import routes from "./routes.list";

const router = createRouter({
  history: createMemoryHistory(),
  routes
});

export { router };
