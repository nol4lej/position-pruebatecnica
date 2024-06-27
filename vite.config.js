import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.js"],
            refresh: true
        }),
        vue()
    ],
    resolve: {
        alias: {
            vue: "vue/dist/vue.esm-bundler.js",
            '@router': path.resolve(__dirname, './resources/js/router'),
            '@components': path.resolve(__dirname, './resources/js/components'),
            '@views': path.resolve(__dirname, './resources/js/views'),
            '@config': path.resolve(__dirname, './resources/js/config'),
            '@services': path.resolve(__dirname, './resources/js/services'),
        }
    }
});
