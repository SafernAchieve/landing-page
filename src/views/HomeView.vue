<template>
    <v-main>
      <v-container>
        <!-- Hero Section -->
        <v-row align="center" justify="center" class="text-center my-10">
          <div>
            <h1 class="display-1 font-weight-bold">Clinician Messaging System</h1>
          </div>
        </v-row>

        <!-- Features Section -->
        <v-row class="my-10">
          <v-col cols="12" md="12">
            <v-card class="text-center"> <!-- Center align content in v-card -->
              <v-card-title>Real-time Messaging</v-card-title>
              <v-card-text>Send and receive messages.</v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <RouterView />
      </v-container>
    </v-main>
   
</template>