import { handleResponse, handleError, handleToken } from './interceptors/index';

// Función para configurar interceptores de respuestas y errores
export const setupInterceptors = (instance) => {

    // Configurar interceptor de respuestas
    instance.interceptors.response.use(

        (response) => {
            // Llamar a la función de manejo de respuestas exitosas
            return handleResponse(response);
        },

        (error) => {
            // Llamar a la función de manejo de errores
            return handleError(error);
        }
    );

    // Configurar interceptor de solicitudes
    instance.interceptors.request.use(
        (config) => {
            return handleToken(config);
        },
        (error) => {
            return handleError(error);
        }
    );

};