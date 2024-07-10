<template>
    <v-app>
      <v-main>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-data-table
                :headers="headers"
                :items="contacts"
                class="elevation-1"
              >
                <template v-slot:top>
                  <v-toolbar flat>
                    <v-toolbar-title>Email List</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" @click="createMessage">
                    Create Message
                  </v-btn>
                  </v-toolbar>
                </template>
                <template v-slot:item.action="{ item }">
                  <v-icon
                    small
                    class="mr-2"
                    @click="createMessage"
                    color="primary"
                  >mdi-eye</v-icon>
                  <v-icon
                    small
                    @click="deleteEmailField(item)"
                    color="red"
                  >mdi-delete</v-icon>
                </template>
              </v-data-table>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script>
  import router from '../router'
  export default {
    name: 'viewMessage',
    components: {
        router
    },
    data() {
      return {
        headers: [
          { text: 'Recipients', value: 'name' },
          { text: 'Message', value: 'message' },
          { text: 'Date Sent', value: 'date' },
          { text: 'Action', value: 'action', sortable: false },
        ],
        contacts: [
          { id: 1, name: 'Simon Ryles', email: 'simon@example.com', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', date: '2024-06-01' },
          { id: 2, name: 'Marion Walker', email: 'marion@example.com', message: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', date: '2024-06-02' },
          { id: 3, name: 'John Doe', email: 'john@example.com', message: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.', date: '2024-06-03' },
          { id: 4, name: 'Jane Smith', email: 'jane@example.com', message: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', date: '2024-06-04' },
          // Add more contacts as needed
        ],
      };
    },
    methods: {

      viewMessage(message) {
        alert('Message: ' + message);
      },
      deleteEmailField(contact) {
        this.contacts = this.contacts.filter(c => c.id !== contact.id);
      },
      createMessage(){
        this.$router.push('/createMessage');
      }
    },
  };
  </script>
  
  <style scoped>
  /* Add any scoped styles here */
  </style>
  