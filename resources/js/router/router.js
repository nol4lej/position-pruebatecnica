import { createMemoryHistory, createRouter } from "vue-router";
import routes from "./routes.list";
import { beforeEachRoute } from "./router.middleware.js";

const router = createRouter({
  history: createMemoryHistory(),
  routes
});

router.beforeEach(beforeEachRoute);

export { router };
