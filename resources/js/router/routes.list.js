import MainLayout from "@views/MainLayout.vue";
import LoginView from "@views/LoginView.vue";
import HomeView from "@views/HomeView.vue";

const routes = [
  { path: "/login", name: 'login', component: LoginView },
  {
    path: '/',
    component: MainLayout,
    meta: { requiresAuth: true },
    children: [
      { path: '', name: 'default', redirect: 'home' }, // Redirecciona a una subruta por defecto
      { path: 'home', name: 'home', component: HomeView },
    ]
  }

];

export default routes;
