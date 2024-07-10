<template>
    <v-container class="my-5">
      <v-row>
        <v-col cols="12" class="text-center">
          <h2 class="font-weight-bold">Testimonials</h2>
          <p>What our clients say about us</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4" v-for="testimonial in testimonials" :key="testimonial.name">
          <v-card outlined>
            <v-card-text>
              <v-icon large class="mr-2">mdi-format-quote-open</v-icon>
              {{ testimonial.quote }}
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-avatar>
                <img :src="testimonial.image" alt="avatar">
              </v-avatar>
              <v-spacer></v-spacer>
              <v-card-subtitle>{{ testimonial.name }}</v-card-subtitle>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'Testimonials',
    data() {
      return {
        testimonials: [
          { name: 'John Doe', quote: 'This service is amazing!', image: 'https://via.placeholder.com/100' },
          { name: 'Jane Smith', quote: 'I love the features!', image: 'https://via.placeholder.com/100' },
          { name: 'Samuel Green', quote: 'Highly recommend this to everyone.', image: 'https://via.placeholder.com/100' }
        ]
      };
    }
  };
  </script>
  