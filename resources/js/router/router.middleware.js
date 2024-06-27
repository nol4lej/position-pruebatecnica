function isAuthenticated() {
  const token = localStorage.getItem('token');
  return !!token; // Devuelve true si el token existe y es válido, de lo contrario false
}

export const beforeEachRoute = (to, from, next) => {
  if (to.matched.some(route => route.meta.requiresAuth)) {

    if (isAuthenticated()) {
      next();
    } else {
      next('/login');
    }
  } else {
    next(); // La ruta no requiere autenticación, permite continuar
  }
}
