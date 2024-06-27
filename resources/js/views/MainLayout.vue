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
export default {
  name: 'MainLayout',
  data() {
    return {
      drawer: false, // Control del navbar lateral
    };
  },
};
</script>

<style>

</style>