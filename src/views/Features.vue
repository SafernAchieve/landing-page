<template>
    <v-container class="my-5">
      <v-row>
        <v-col cols="12" class="text-center">
          <h2 class="font-weight-bold">Features</h2>
          <p>Discover the amazing features we offer</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4" v-for="feature in features" :key="feature.title">
          <v-card outlined>
            <v-img :src="feature.image" height="200px"></v-img>
            <v-card-title>{{ feature.title }}</v-card-title>
            <v-card-text>{{ feature.description }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'Features',
    data() {
      return {
        features: [
          { title: 'Feature One', description: 'Description for feature one.', image: 'https://via.placeholder.com/400x200' },
          { title: 'Feature Two', description: 'Description for feature two.', image: 'https://via.placeholder.com/400x200' },
          { title: 'Feature Three', description: 'Description for feature three.', image: 'https://via.placeholder.com/400x200' }
        ]
      };
    }
  };
  </script>
  