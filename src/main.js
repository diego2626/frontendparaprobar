import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Productos from './views/Productos.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/productos', component: Productos }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
