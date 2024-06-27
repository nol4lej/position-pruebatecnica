# Resumen de Prueba Técnica

## Aplicación Vue.js con Vuetify

### Descripción
Este proyecto cumple con los requisitos especificados en la prueba técnica, enfocándose en crear una aplicación Vue.js con Vuetify para el frontend y Laravel para el backend API.

### Funcionalidades Implementadas

- **Autenticación y Autorización:**
  - Implementación de autenticación utilizando Laravel Sanctum.
  - Interceptores de Axios para manejar errores e incluir el token de autenticación en cada solicitud.

- **Interfaz de Usuario:**
  - Módulo de inicio de sesión con autenticación.
  - Después del inicio de sesión exitoso, los usuarios son dirigidos a una página de inicio.

- **Página de Inicio:**
  - Incluye un formulario con validación para dos parámetros:
    - Fecha
    - Monto
  - Los valores se envían a la API para validación y almacenamiento en la base de datos.

- **Integración con Base de Datos:**
  - Datos almacenados en MySQL utilizando migraciones de Laravel.
  - Transacciones almacenadas en una tabla con una relación de clave foránea para distinguir usuarios.

- **Visualización de Datos:**
  - Implementación de un gráfico de área utilizando amCharts.
  - El gráfico se actualiza dinámicamente con los datos del usuario, reflejando la última entrada sin recargar la página.
  - Los campos de calendario y monto se reinician después de una presentación exitosa.

- **Gestión del Estado Global:**
  - Gestión del estado de la aplicación utilizando Vuex.
  - El estado incluye detalles del usuario autenticado, gestión de tokens y listas de transacciones.

### Estructura del Proyecto y Tecnologías Utilizadas

- **Backend:**
  - Desarrollado con Laravel para endpoints de API RESTful.
  - Se utilizó Laravel Sanctum para la autenticación de la API.

- **Frontend:**
  - Construido con Vue.js y Vuetify para un diseño receptivo.
  - Se utilizó Vue Router para la navegación y archivos barrel para una mejor gestión de rutas.

### Pasos para Desplegar

1. **Clonar el Repositorio:**
```
git clone https://github.com/nol4lej/position-pruebatecnica.git
cd destacados-pruebatecnica
```
2. Instalar Dependencias de PHP y Composer:
```
composer install
```
3. Instalar Dependencias de Node.js:
```
npm install
```
4. Realizar Migraciones a la Base de Datos MySQL:
```
php artisan migrate
```
5. Compilar Assets para Estilos:
```
npm run dev
```
5. Iniciar el Servidor de Desarrollo:
```
php artisan serve
```