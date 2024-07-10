<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Clinician Messaging System</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/">Home</v-btn>
      <v-btn @click="viewMessage">Messaging</v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      expand-on-hover
      rail
    >
      <v-list dense nav>
        <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
        <v-list-item prepend-icon="mdi-account-multiple" title="Directory" value="directory"></v-list-item>
        <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
        <v-list-item prepend-icon="mdi-calendar" title="Calendar" value="calendar"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <!-- Router view for rendering components -->
      <router-view></router-view>
    </v-main>

    <v-footer app color="primary" dark>
      <v-container>
        <!-- Footer content -->
        Clinician Messaging System
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      drawer: true // Controls the visibility of the navigation drawer
    };
  },
  methods: {
    viewMessage() {
      // Directly navigate to the viewMessage route
      this.$router.push('/viewMessage');
    }
  }
};
</script>

<style>
/* Add any custom styles here */
</style>
