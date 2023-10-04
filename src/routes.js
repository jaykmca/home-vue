import VueRouter from 'vue-router';
import Vue from 'vue';
import Home from './components/HomeView.vue';
import About from './components/AboutView.vue';
import Contact from './components/ContactView.vue';


Vue.use(VueRouter);
//const baseUrl='/apptwo'


const routes = [
    { path: '/', component: Home, name: 'HomeView'},
    { path: '/about', component: About, name: 'AboutView'},
    { path: '/contact', component: Contact, name: 'ContactView'},
   
  ];


  const router = new VueRouter({
    routes,
  });

  export default router;
