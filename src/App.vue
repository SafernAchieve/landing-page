<template>
  <v-app>
    <!-- App bar for navigation -->
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Clinician Messaging System</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/messaging">Messaging</v-btn>
    </v-app-bar>

    <!-- Main content -->
    <v-main>
      <v-container>
        <!-- Hero Section -->
        <v-row align="center" justify="center" class="text-center my-10">
          <div>
            <h1 class="display-2 font-weight-bold">Welcome to Clinician Messaging System</h1>
            <h4>Effortlessly communicate with your team</h4>
          </div>
        </v-row>

        <!-- Features Section -->
        <v-row class="my-10">
          <v-col cols="12" class="text-center">
            <h2 class="font-weight-bold">Our Features</h2>
            <p>Streamline your communication with these powerful features</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-card>
              <v-card-title>Real-time Messaging</v-card-title>
              <v-card-text>Send and receive messages in real-time with your team.</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card>
              <v-card-title>Secure Communication</v-card-title>
              <v-card-text>All messages are securely encrypted to ensure privacy.</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!-- Footer -->
    <v-footer color="primary" dark>
      <v-container>
        <v-row justify="center">
          <v-col class="text-center">
            &copy;2024 Clinician Messaging System
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style>
@import '~vuetify/dist/vuetify.min.css';
</style>
