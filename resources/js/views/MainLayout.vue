<template>
  <v-app>
    <!-- Navbar lateral -->
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Contenido principal -->
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>My App</v-toolbar-title>
      <v-spacer></v-spacer> <!-- Añade un espacio flexible para alinear los botones a la derecha -->

      <!-- Botones en la barra de navegación -->
      <v-btn @click="logout" text>Logout</v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <!-- Contenido de la página -->
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import api from '@services/api';
import { router } from '@router';
import { TokenService } from '@services'
import { mapActions } from 'vuex';

export default {
  name: 'MainLayout',
  data() {
    return {
      drawer: false, // Control del navbar lateral
    };
  },
  methods: {
    ...mapActions(['loginSuccess']), 
    async logout() {
      try {
        await api.get('/auth/logout');
        TokenService.removeToken()
        this.loginSuccess({
            userData: null,
            token: null
        });
        router.push('/login');
      } catch (error) {
        console.error('Error al hacer logout:', error);
      }
    }
  }
};
</script>

<style>

</style>
