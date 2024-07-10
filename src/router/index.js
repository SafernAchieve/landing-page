// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'; // Ensure this matches your component location
import AboutView from '../views/AboutView.vue';
import viewMessage from '../views/viewMessage.vue'; // Ensure this matches your component location
import createMessage from '../views/createMessage.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/viewMessage',
    name: 'viewMessage',
    component: viewMessage
  },
  {
    path: '/createMessage',
    name: 'createMessage',
    component: createMessage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
