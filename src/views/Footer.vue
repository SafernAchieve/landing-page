<template>
    <v-footer app color="primary" dark>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <h3 class="font-weight-bold white--text">My Company</h3>
            <p class="white--text">© 2024 My Company. All rights reserved.</p>
          </v-col>
          <v-col cols="12" md="4">
            <h3 class="font-weight-bold white--text">Quick Links</h3>
            <v-list>
              <v-list-item link>
                <v-list-item-content>
                  <v-list-item-title class="white--text">Home</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link>
                <v-list-item-content>
                  <v-list-item-title class="white--text">Features</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link>
                <v-list-item-content>
                  <v-list-item-title class="white--text">About</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link>
                <v-list-item-content>
                  <v-list-item-title class="white--text">Contact</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="12" md="4">
            <h3 class="font-weight-bold white--text">Follow Us</h3>
            <v-btn icon>
              <v-icon class="white--text">mdi-facebook</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon class="white--text">mdi-twitter</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon class="white--text">mdi-linkedin</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </template>
  
  <script>
  export default {
    name: 'Footer'
  };
  </script>
  
  <style scoped>
  .v-footer {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  </style>
  