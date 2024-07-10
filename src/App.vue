<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Clinician Messaging System</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text>Home</v-btn>
      <v-btn text>Features</v-btn>
      <v-btn text>About</v-btn>
      <v-btn text>Contact</v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row align="center" justify="center" class="text-center my-10">
          <div>
            <h1 class="display-1 font-weight-bold">Clinician Messaging System</h1>
            <h4>Effortlessly communicate with your team</h4>
          </div>
        </v-row>

        <v-row class="my-10">
          <v-col cols="12" class="text-center">
            <h2 class="font-weight-bold">Client Intake Form</h2>
            <p>Collect essential information from the client and communicate with clinicians instantly.</p>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="12" md="8">
            <v-card>
              <v-card-title>Client Intake Form</v-card-title>
              <v-card-text>
                <v-form ref="form">
                  <v-text-field label="Full Name" v-model="form.name" required></v-text-field>
                  <v-text-field label="Email" v-model="form.email" required></v-text-field>
                  <v-text-field label="Phone Number" v-model="form.phone" required></v-text-field>
                  <v-textarea label="Comments" v-model="form.comments"></v-textarea>
                  <v-btn color="primary" @click="submitForm">Submit</v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row class="my-10">
          <v-col cols="12" class="text-center">
            <h2 class="font-weight-bold">Messaging Section</h2>
            <p>Communicate with clinicians directly from this platform.</p>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="12" md="8">
            <v-card>
              <v-card-title>Send a Message</v-card-title>
              <v-card-text>
                <v-form ref="messageForm">
                  <v-text-field label="Recipient" v-model="message.recipient" required></v-text-field>
                  <v-textarea label="Message" v-model="message.content" required></v-textarea>
                  <v-btn color="primary" @click="sendMessage">Send Message</v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-container class="my-5">
          <v-row>
            <v-col cols="12" class="text-center">
              <h2 class="font-weight-bold">Features</h2>
              <p>Streamline your communication with these powerful features</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="4">
              <v-card>
                <v-card-title>Instant Messaging</v-card-title>
                <v-card-text>Send and receive messages in real-time with your team.</v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="4">
              <v-card>
                <v-card-title>Document Sharing</v-card-title>
                <v-card-text>Share important documents securely and easily.</v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="4">
              <v-card>
                <v-card-title>Appointment Scheduling</v-card-title>
                <v-card-text>Manage and schedule appointments efficiently.</v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

        <v-container class="my-5">
          <v-row>
            <v-col cols="12" class="text-center">
              <h2 class="font-weight-bold">Testimonials</h2>
              <p>What our users are saying</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="4">
              <v-card>
                <v-card-title>User 1</v-card-title>
                <v-card-text>
                  "This system has revolutionized the way we communicate with our team. It's fast and reliable."
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="4">
              <v-card>
                <v-card-title>User 2</v-card-title>
                <v-card-text>
                  "The document sharing feature is a game changer. We can now share patient records securely and easily."
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="4">
              <v-card>
                <v-card-title>User 3</v-card-title>
                <v-card-text>
                  "Scheduling appointments has never been easier. This system has saved us so much time."
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

      </v-container>
    </v-main>

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
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        comments: ''
      },
      message: {
        recipient: '',
        content: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Implement form submission logic here
      console.log('Form submitted:', this.form);
      alert('Form submitted successfully!');
    },
    sendMessage() {
      // Implement message sending logic here
      console.log('Message sent:', this.message);
      alert('Message sent successfully!');
    }
  }
};
</script>

<style>
@import '~vuetify/dist/vuetify.min.css';
</style>
