<template>
    <v-parallax src="https://via.placeholder.com/1600x900" height="600">
      <v-layout column align-center justify-center>
        <h1 class="display-1 font-weight-bold white--text">Welcome to Our Service</h1>
        <h4 class="white--text">Experience the difference</h4>
        <v-btn color="primary" class="mt-5" large>Get Started</v-btn>
      </v-layout>
    </v-parallax>
  </template>
  
  <script>
  export default {
    name: 'Hero'
  };
  </script>
  
  <style scoped>
  .v-parallax {
    color: white;
  }
  </style>
  