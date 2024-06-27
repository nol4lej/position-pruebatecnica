import 'vuetify/styles'; // Estilos de Vuetify
import { createVuetify } from 'vuetify';
import { mdi } from 'vuetify/iconsets/mdi-svg';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        // defaultSet: 'mdi',
        // sets: {
        //     mdi,
        // },
    },
    theme: {
        dark: false, // Modo oscuro desactivado
        themes: {
            light: {
                primary: '#1976D2', // Azul primario
                secondary: '#424242', // Gris secundario
                accent: '#82B1FF', // Azul acentuado
                error: '#FF5252', // Rojo error
                info: '#2196F3', // Azul información
                success: '#4CAF50', // Verde éxito
                warning: '#FFC107', // Amarillo advertencia

                // Colores de texto
                text: {
                    primary: '#333333', // Texto principal
                    secondary: '#757575', // Texto secundario
                    disabled: '#BDBDBD', // Texto deshabilitado
                },

                // Colores de fondo
                background: {
                    base: '#FFFFFF', // Fondo base
                    card: '#F5F5F5', // Fondo de tarjetas
                    dialog: '#FFFFFF', // Fondo de diálogos
                    toolbar: '#E0E0E0', // Fondo de la barra de herramientas
                },

                // Otros estilos
                border: '#BDBDBD', // Color de borde
                divider: '#BDBDBD', // Color de divisor
                icon: '#616161', // Color de icono
                scrollbar: '#9E9E9E', // Color de barra de desplazamiento
                elevation: '0 4px 8px rgba(0,0,0,0.2)', // Sombra de elevación
            },
        },
    },
});

export default vuetify;
